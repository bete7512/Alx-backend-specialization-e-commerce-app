import { Product } from '../tools/product'
import { User } from '../tools/user_by_pk'
import { insert_order } from '../tools/order'
import {v4 as uuidv4} from 'uuid'
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
  console.log(p_id);
  const product = await Product({id:p_id})
  console.log(product);
  const user = await User({ id:u_id }, USER_QUERY)
  console.log(user);
  const { phone,first_name, last_name } = user
  const { price } = product

  let myChapa = new Chapa('CHASECK_TEST-R2r7oy9nnhaZuJLpM47VxYVHZXadMkS6')
  const customerInfo = {
    amount: `${price}`,
    currency: 'ETB',
    phone: phone,
    email:'betekbebe@gmail.com',
    first_name: first_name,
    last_name: last_name,
    tx_ref: uuidv4(),
    callback_url: 'https://webhook.site/',
    return_url: 'http://localhost:5173/', // your callback URL
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
  
  const chapa_response = await chapa(customerInfo)
  console.log(chapa_response)
  try {
    const order = await insert_order({
      customer_id: u_id,
      product_id: p_id,
      reference_id: chapa_response.tx_ref,
    })
    console.log(order)
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message })
  }
  return res.json({
    check_out: chapa_response.data.checkout_url,
  })
}
module.exports = handler
