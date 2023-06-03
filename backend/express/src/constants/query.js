export const USER_QUERY_BY_ID = `
query MyQuery($email: String = "", $phone: String = "") {
    users(where: {_or:[{email:{_eq: $email }}, {phone: {_eq: $phone}}]}) {
      id
      email
      phone
      password
      role{
        name
      }
    }
  }
`

export const INSERT_CUSTOMERS = `
mutation MyMutation($first_name: String = "", $last_name: String = "", $password: String = "", $phone: String = "") {
  insert_customers(objects: {first_name: $first_name, last_name: $last_name, password: $password, phone: $phone}) {
    affected_rows
    returning {
      id
    }
  }
}
` 

export const INSERT_SELLERS = `
mutation MyMutation($first_name: String = "", $last_name: String = "", $password: String = "", $phone: String = "", $role_id: uuid = "", $id: uuid = "") {
  insert_users(objects: {first_name: $first_name, last_name: $last_name, password: $password, phone: $phone, role_id: $role_id, id: $id}) {
    returning {
      id
    }
  }
}
`