/*
*
*/
import _customerConfig                  from "../../config/customerTable.json" ;
import { parseConfigToGraphqlFields }   from "../util";
import {  GraphQLObjectType }           from 'graphql' ;
import { GraphQLInt, GraphQLString, GraphQLFloat, GraphQLInputObjectType }   from "graphql" ;
//
const log = require("debug")("nodejs-mysql-graphql:customerType")
const customerConfig = _customerConfig as IJson ;
//
const graphqlFields = parseConfigToGraphqlFields(customerConfig) ;
//
export const type = new GraphQLObjectType({
    name: "Customer" ,
    fields: () => ( graphqlFields )
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