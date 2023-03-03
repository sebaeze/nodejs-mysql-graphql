/*
*
*/
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt } from "graphql";
import { type as typeCustomer }            from "./types" ;
import { inputUpdateCustomer  }            from "./types" ;
//
import { asyncFetchData    }               from "../../db" ;
import { updateCustomer    }               from "../../db" ;
//
const log = require("debug")("nodejs-mysql-graphql:schemaCustomerIndex")
//
//
const queryCustomers = () => {
    try {
        return {
            getCustomer:  {
              type:       new GraphQLList(typeCustomer) ,
              args:       { customerNumber: {type: new GraphQLNonNull(GraphQLInt)} } ,
              resolve(root?:any,args?:any,arg2?:any,arg3?:any) { 
                    log("....fieldNodes: ",arg3.fieldNodes[0].selectionSet.selections,"\n loc: ",arg3.fieldNodes[0].selectionSet.loc ,"**") ;
                    return asyncFetchData(args) ;
                }
            },
            getCustomers: {
                type:     new GraphQLList(typeCustomer) ,
                resolve:  asyncFetchData
            }
        } ;
    } catch(errQC){
        console.log("...errQC: ",errQC,";") ;
        throw errQC ;
    } ;
} ;
//
const mutationCustomers = () => {
    try {
        return {
            updateCustomer:  {
              type:       new GraphQLList(typeCustomer) ,
              args:       { 
                input: { type: inputUpdateCustomer }
              } ,
              resolve(root?:any,args?:any){ 
                    return updateCustomer(args.input) ;
                }
            }
        }
    } catch(errQC){
        console.log("...errQC: ",errQC,";") ;
        throw errQC ;
    } ;
} ;
//
log("...queryCustomers: ",queryCustomers(),";") ;
//
export const schema = new GraphQLSchema({
    query:    new GraphQLObjectType({ name: "Query"    , fields: queryCustomers }) ,
    mutation: new GraphQLObjectType({ name: "Mutation" , fields: mutationCustomers })
}) ;
//