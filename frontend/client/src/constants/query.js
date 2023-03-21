import gql from "graphql-tag";

export const LOGIN = gql`
  mutation MyMutation($phone: String = "", $password: String = "") {
    login(inputs: { password: $password, phone: $phone }) {
      accestoken
      id
    }
  }
`;

export const SIGNUP = gql`
  mutation MyMutation(
    $fname: String = ""
    $lname: String = ""
    $password: String = ""
    $phone: String = ""
  ) {
    signup(
      input: {
        fname: $fname
        lname: $lname
        password: $password
        phone: $phone
      }
    ) {
      success
    }
  }
`;


export const USER_PROFILE = gql`
  query MyQuery($id: uuid = "") {
    customers(where: { id: { _eq: $id } }) {
      last_name
      phone
      first_name
      email
      created_at
      avator
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
query MyQuery {
  products {
    about_product
    created_at
    id
    price
    product_description
    product_image
    product_name
    updated_at
    category_id
    category {
      name
      id
      created_at
    }
  }
}
`;
