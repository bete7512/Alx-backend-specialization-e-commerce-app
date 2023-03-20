import client from "../configuration/apollo.config";

const User = async (variables, query) => {
    const data = await client.request(query, variables);
    return data['users'][0];
    }

export { User}