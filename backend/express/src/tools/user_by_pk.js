import client from "../configuration/apollo.config";

const User = async (variables, query) => {
try {
    const data = await client.request(query, variables);
    console.log(data);
    return data.customers_by_pk;
} catch (error) {
    console.log(error);
}
    }

export { User}