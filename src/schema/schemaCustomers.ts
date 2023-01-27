/*
*
*/
import { buildSchema } from "graphql" ;
//
//
export const schemaCustomers = buildSchema(`
    input UserInput {
        email: String!
        name: String!
    }
    type User {
        id: Int!
        name: String!
        email: String!
    }
    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }
    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`) ;
// ;