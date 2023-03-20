import { GraphQLClient } from 'graphql-request'
// eslint-disable-next-line no-unused-vars
import * as dotenv from 'dotenv'

dotenv.config()
const client = new GraphQLClient(process.env.HASURA_END_POINT || 'https://alx-full-stack.hasura.app/v1/graphql', {
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || '4XOey5f43TUW5FcCHlX9lZWsOCfmeMUCi6rKOze1940Ija9QQRVh4fdSTXitfunr',
  },
})
export default client
