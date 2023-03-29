import client from '../configuration/apollo.config'

const Product = async (variables) => {
  try {
    const query = `
        query MyQuery($id: uuid = "8b2cc37a-9a17-4995-98ec-f84a4983c6fb") {
            products_by_pk(id: $id) {
              about_product
              average_rate
              average_rates
              category_id
              created_at
              id
              is_carted
              price
            }
          }`
    const product = await client.request(query, variables)

    return product.products_by_pk
  } catch (error) {
    console.log(error)
    return error
  }
}
export { Product }
