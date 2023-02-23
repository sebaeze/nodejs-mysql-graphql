/*
*
*/
import _productConfig                   from "../../config/productTable.json" ;
import { parseConfigToGraphqlFields }   from "..";
import {  GraphQLObjectType }           from 'graphql' ;
//
const log = require("debug")("nodejs-mysql-graphql:productType")
const productConfig:IJson = _productConfig ;
//
const graphqlFields = parseConfigToGraphqlFields(productConfig) ;
log("...def:: ",graphqlFields,";") ;
//
export const type = new GraphQLObjectType({
    name: "Product" ,
    fields: () => ( graphqlFields )
}) ;
//