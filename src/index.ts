const { ApolloServer, gql } = require('apollo-server') ;

import { typeDefs } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import { client } from './database/db';
import { createUserTable, ListTables} from "./utils"


// client.connect()
 
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// createUserTable();
ListTables() 
 
const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen(4000, ()=> console.log(`Server is running at http://localhost:4000`))   