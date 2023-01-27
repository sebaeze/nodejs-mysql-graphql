/*
*
*/
import { buildSchema } from "graphql" ;
//
export const schema = buildSchema(`
    input CustomerInput {
        customerNumber: Int!
    }
    type Customer {
        customerNumber:   Int!
        customerName:     String!
        contactLastName:  String!
        contactFirstName: String!
        phone:            String!
        addressLine1:     String!
        addressLine2:     String!
        city:             String
        state:            String!
        postalCode:       String!
        country:          String!
        salesRepEmployeeNumber: Int!
        creditLimit:           Float!
    }
    type Query {
        getCustomers: [Customer]
    }
`) ;
//