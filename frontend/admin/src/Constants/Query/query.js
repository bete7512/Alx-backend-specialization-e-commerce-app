import gql from "graphql-tag";

const LOGIN = gql`
  mutation MyMutation(
    $phone: String = "0962247109"
    $password: String = "123456"
  ) {
    login(inputs: { password: $password, phone: $phone }) {
      accestoken
      id
    }
  }
`;

const PRODUCT_QUERY = gql`
query MyQuery {
  products {
    product_name
    updated_at
    product_image
    product_description
    price
    id
    created_at
    about_product
    product_reviews_aggregate {
      aggregate {
        count(distinct: false)
      }
    }
  }
}

`;

const CATEGORY = gql`
  query MyQuery {
    category {
      created_at
      id
      name
      updated_at
    }
  }
`;

const INSERT_PRODUCT = gql`
mutation MyMutation($about_product: String = "", $price: Float = 1.5, $product_description: String = "", $product_image: String = "", $product_name: String = "", $category_id: uuid = "") {
  insert_products(objects: {about_product: $about_product, price: $price, product_description: $product_description, product_image: $product_image, product_name: $product_name, category_id: $category_id}) {
    affected_rows
    returning {
      id
      product_name
    }
  }
}

`;


const FILE_UPLOAD = gql`
mutation MyMutation($type: String = "", $name: String = "", $base64str: String = "") {
  fileupload(base64str: $base64str, name: $name, type: $type) {
    file_path
  }
}
`
export { LOGIN, PRODUCT_QUERY, CATEGORY, INSERT_PRODUCT,FILE_UPLOAD };
