import { gql } from "apollo-server";

export const typeDefs = gql`
    type User {
    id: Int
    name: String
    email: String
    password : String
    projects: [project]
    }

    type project {
    id: Int
    title: String
    active: Boolean
    members: [User]
    }

    type Query {
    users: [User]
    }
    `;