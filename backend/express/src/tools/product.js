import client from "../configuration/apollo.config";

const Product = async (variables) => {
    const query = ''
    const data = await client.request(query, variables);
    return data['users'][0];
    }

export { Product }