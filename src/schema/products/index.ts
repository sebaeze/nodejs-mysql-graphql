/*
*
*/
import { GraphQLObjectType } from "graphql";
import { GraphQLList, GraphQLNonNull, GraphQLSchema, GraphQLString }    from "graphql" ;
import { type  }            from "./type"  ;
//
const log = require("debug")("nodejs-mysql-graphql:schemaProductsIndex")
//
log("..typeprod:: ",type,"***") ;
const fieldsQueryProducts = () => {
    try {
        return {
            queryProduct: {
                type:   new GraphQLList(type) ,
                args:   { productCode: {type: new GraphQLNonNull(GraphQLString)} },
                resolve(root?:any,args?:any){
                    console.log("....queryProduct:: args: ",args,"***") ;
                    return [args] ;
                }
            }
        } ;
    } catch(errQP){
        throw errQP  ;
    } ;
} ;
//
export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({ name: "Query" , fields: fieldsQueryProducts })
}) ;
//