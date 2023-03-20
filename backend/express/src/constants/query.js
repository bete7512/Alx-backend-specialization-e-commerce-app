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