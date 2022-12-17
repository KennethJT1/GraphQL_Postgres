// export const users = [
//     {
//        name: "Abeke Alabi",
//        email: "Alabai@email.com",
//        project: [{title: "Site Upgrade - Similar 3"}] 
//     },
//     {
//        name: "Funke Adigun",
//        email: "Adigun@email.com",
//        project: [{title: "Site Upgrade - Similar 3"}] 
//     }
// ];

const { Client } = require('pg');
import dotenv from "dotenv";
dotenv.config();


export const client = new Client({
   user: process.env.db_user,
   host: process.env.db_host,
   database: process.env.database,
   password: process.env.db_pass,
   port: 5432,
 })
//  client.connect()