import { ApolloClient,createHttpLink,InMemoryCache } from "@apollo/client/core";
const getHeaders = () => {
    var headers = {};
    const token = window.localStorage.getItem("ClientToken");
    if (token){
      headers = { Authorization: `Bearer ${token}` };

    }
    return headers;
  };
const httpLink = createHttpLink({
    uri:'https://gulit.hasura.app/v1/graphql',
    fetch,
    headers:getHeaders()
})
const apolloclient = new ApolloClient({
    link:httpLink,
    cache:new InMemoryCache()
})
export default apolloclient