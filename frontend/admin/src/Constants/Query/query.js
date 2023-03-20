import gql from 'graphql-tag'

const LOGIN = gql`
mutation MyMutation($phone: String = "0962247109", $password: String = "123456") {
  login(inputs: {password: $password, phone: $phone}) {
    accestoken
    id
  }
}
`
export { LOGIN }