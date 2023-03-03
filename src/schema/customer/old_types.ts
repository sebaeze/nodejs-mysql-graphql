/*
*
*/
import {
    GraphQLInt,
    GraphQLFloat ,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInputObjectType,
  } from 'graphql' ;
//
export const typeCustomer = new GraphQLObjectType({
    name: "Customer" ,
    fields: () => ({
        customerNumber:    { type: GraphQLInt } ,
        customerName:      { type: GraphQLString },
        contactLastName:   { type: GraphQLString },
        contactFirstName:  { type: GraphQLString },
        phone:             { type: GraphQLString },
        addressLine1:      { type: GraphQLString },
        addressLine2:      { type: GraphQLString },
        city:              { type: GraphQLString },
        state:             { type: GraphQLString },
        postalCode:        { type: GraphQLString },
        country:           { type: GraphQLString },
        salesRepEmployeeNumber: { type: GraphQLInt },
        creditLimit:            { type: GraphQLFloat }
    })
}) ;
//
export const inputUpdateCustomer = new GraphQLInputObjectType({
    name: "inputUpdateCustomer" ,
    fields: {
        customerNumber:    { type: GraphQLInt } ,
        customerName:      { type: GraphQLString },
        contactLastName:   { type: GraphQLString },
        contactFirstName:  { type: GraphQLString },
        creditLimit:       { type: GraphQLFloat }
    }
}) ;
//