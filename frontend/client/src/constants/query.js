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
query MyQuery($search: String = "%%", $offset: Int = 0, $limit: Int = 10) {
  products(where: {_or: [{product_name: {_ilike: $search}},{category: {name: {_ilike: $search}}}]}, limit: $limit, offset: $offset) {
    about_product
    created_at
    id
    price
    product_description
    product_image
    average_rate
    product_name
    updated_at
    category_id
    category {
      name
      id
      created_at
    }
    number_of_likes
    is_carted
    is_favorite
    is_liked
  }
}

`;

export const CATEGORY = gql`
  query MyQuery {
    category {
      created_at
      id
      name
      updated_at
    }
  }
`;

export const CART_QUERY = gql`
query MyQuery {
  cart {
    product {
      about_product
      average_rates
      category {
        name
      }
      created_at
      is_carted
      id
      is_favorite
      is_liked
      number_of_likes
      price
      product_description
      product_image
      product_name
      updated_at
      is_ordered
      average_rate
    }
    quantity
  }
}
`


export const FAVORITE_QUERY = gql`
query MyQuery {
  favorite {
    product {
      created_at
      category {
        name
      }
      about_product
      average_rates
      id
      is_carted
      is_favorite
      is_liked
      number_of_likes
      price
      product_description
      product_image
      product_name
      updated_at
      is_ordered
      average_rate
    }
    created_at
  }
}

`;


export const QUERY_ORDER = gql`
query MyQuery {
  order {
    product {
      about_product
      average_rates
      created_at
      is_carted
      id
      is_favorite
      is_liked
      is_ordered
      number_of_likes
      price
      product_description
      product_image
      product_name
      updated_at
    }
    status
  }
}
`;