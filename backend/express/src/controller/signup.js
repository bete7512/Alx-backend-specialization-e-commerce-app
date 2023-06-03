import client from '../configuration/apollo.config'
import {
  INSERT_CUSTOMERS,
  USER_QUERY_BY_ID,
  INSERT_SELLERS,
} from '../constants/query'
import { User } from '../tools/user'
import bcrypt from 'bcrypt'
const { v4: uuidv4 } = require('uuid');

const execute = async (query, variables) => {
  const fetchResponse = await client.request(query, variables)
  console.log(fetchResponse)
  return fetchResponse
}
const handler = async (req, res) => {
  console.log(req.body.input)
  const { fname, lname, phone, password, types } = req.body.input.input
  const user = await User({ phone: phone }, USER_QUERY_BY_ID)
  if (types === 'sellers') {
    if (user) {
      return res.status(400).json({
        message: 'you are  registered no registratrion again',
      })
    } else {
      const saltRounds = 10
      const salt = bcrypt.genSaltSync(saltRounds)
      const hashed = bcrypt.hashSync(password, salt)
      const variables = {
        first_name: fname,
        last_name: lname,
        phone: phone,
        password: hashed,
        role_id: '70149797-d035-464e-8479-c6502de55ed6',
		id: uuidv4()
      }
      const seller = await execute(INSERT_SELLERS, variables)
	  console.log(seller)
      if (seller) {
        res.send({
			success:
            'You are succefully registered.Now you can Sell your products',
        })
      } else {
        res.send({
          message: 'something went wrong please try again',
        })
      }
    }
  } else {
    if (user) {
      return res.status(400).json({
        message: 'you are  registered no registratrion again',
      })
    } else {
      const saltRounds = 10
      const salt = bcrypt.genSaltSync(saltRounds)
      const hashed = bcrypt.hashSync(password, salt)
      const variables = {
        first_name: fname,
        last_name: lname,
        phone: phone,
        password: hashed,
      }
      const customer = await execute(INSERT_CUSTOMERS, variables)
      if (customer) {
        res.send({
          success: 'You are succefully registered',
        })
      } else {
        res.send({
          message: 'something went wrong please try again',
        })
      }
    }
  }
}
module.exports = handler
