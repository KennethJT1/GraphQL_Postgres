// https://www.youtube.com/watch?v=gt2Z6zAGtc8&list=PLASldBPN_pkAj8b0Ny5IGoYgsnqylP2c-&index=4
const { ApolloServer, gql } = require('apollo-server') ;

import { typeDefs } from './graphql/schema'
import { resolvers } from './graphql/resolvers'
import { client } from './database/db';
import { createUserTable, ListTables, addUser, getUsers } from "./utils"


// client.connect()
 
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// addUser(2, "Kolawole Akanni", "kolawole@gmail.com", "abc123");
// createUserTable();
// ListTables() 
// getUsers();
 
const server = new ApolloServer({
  typeDefs, resolvers
})

server.listen(4400, ()=> console.log(`Server is running at http://localhost:4400`))   