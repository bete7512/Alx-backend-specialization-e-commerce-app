import { Product } from '../tools/product'
import { User } from '../tools/user_by_pk'
import { insert_order } from '../tools/order'
import {v4 as uuidv4} from 'uuid'
import client from '../configuration/apollo.config'
const Chapa = require('../payment/chapa')

const USER_QUERY = ` 
query MyQuery($id: uuid = "") {
    customers_by_pk(id: $id) {
      address
      avator
      email
      created_at
      first_name
      id
      last_name
      phone
    }
  }
`
const handler = async (req, res) => {
  console.log('am there')
  console.log(req.body);
  const u_id = req.body.session_variables['x-hasura-user-id']
  const  p_id  = req.body.input.inputs.product_id
  const cart_id = req.body.input.inputs.cart_id        
  let address_id = req.body.input.inputs.address     
  let quantity = req.body.input.inputs.quantity
  console.log(p_id);
  const product = await Product({id:p_id})
  console.log(product);
  const user = await User({ id:u_id }, USER_QUERY)
  console.log(user);
  const { phone,first_name, last_name } = user
  const { price } = product
  let response_url 
  let myChapa = new Chapa('CHASECK_TEST-R2r7oy9nnhaZuJLpM47VxYVHZXadMkS6')
  const customerInfo = {
    amount: `${price}` * quantity,
    currency: 'ETB',
    phone: phone,
    email:'betekbebe@gmail.com',
    first_name: first_name,
    last_name: last_name,
    tx_ref: uuidv4(),
    callback_url: 'https://webhook.site/',
    return_url: 'https://gulitbuyer.netlify.app/', // your callback URL
    customization: {
      title: 'I love e-commerce',
      description: 'It is time to pay',
    },
  }
  let chapa = async (customerInfo) => {
    try {
      const response = await myChapa.initialize(customerInfo, { autoRef: true })
      return response
    } catch (err) {
      console.log(err);
      return err
    }
  }
  
  try {
    const chapa_response = await chapa(customerInfo)
    console.log(chapa_response)
    response_url = chapa_response.data.checkout_url          
    const order = await insert_order({
      customer_id: u_id,
      product_id: p_id,
      reference_id: chapa_response.tx_ref,
      address_id: address_id,
      quantity: quantity     
    })
    console.log(order)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message })
  }
  try {
    const DELETE_CART = `mutation MyMutation($id: uuid = "") {
      delete_cart_by_pk(id: $id) {
        id
      }
    }
    `
    const response = await client.request(DELETE_CART, { id: cart_id }) // delete cart 
  } catch (error) {
    console.log(error);
  }
  return res.json({
    check_out: response_url,
  })
}
module.exports = handler
