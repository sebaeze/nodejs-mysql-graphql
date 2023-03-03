/*
*
*/
import _productConfig                   from "../../config/productTable.json" ;
import { parseConfigToGraphqlFields }   from "../util";
import {  GraphQLObjectType }           from 'graphql' ;
//
const log = require("debug")("nodejs-mysql-graphql:productType")
const productConfig = _productConfig as IJson ;
//
const graphqlFields = parseConfigToGraphqlFields(productConfig) ;
export const type = new GraphQLObjectType({
    name: "Product" ,
    fields: () => ( graphqlFields )
}) ;
//