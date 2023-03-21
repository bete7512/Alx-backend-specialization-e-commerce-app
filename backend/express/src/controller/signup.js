import client from '../configuration/apollo.config'
import { INSERT_CUSTOMERS,USER_QUERY_BY_ID } from '../constants/query';
import { User } from '../tools/user';
import bcrypt from 'bcrypt';

const execute = async (variables) => {
    const fetchResponse = await client.request(INSERT_CUSTOMERS, variables);
    console.log(fetchResponse);
	return fetchResponse.insert_customers;
};
const handler = async (req, res) => {
    console.log(req.body.input);
	const { fname, lname, phone, password,  } = req.body.input.input;
	const user = await User({ phone: phone }, USER_QUERY_BY_ID);
	if (user) {
		return res.status(400).json({
			message: 'you are  registered no registratrion again'
		})
	}
	else {
		const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hashed = bcrypt.hashSync(password, salt);
		const variables = {
			first_name: fname,
			last_name: lname,
			phone: phone,
			password: hashed,
		}
		const customer = await execute(variables);
		console.log(customer);
		if (customer) {
			res.send({
				success: "You are succefully registered"
			})
		}
		else {
			res.send({
				message: "something went wrong please try again"
			})
		}
	}
};
module.exports = handler