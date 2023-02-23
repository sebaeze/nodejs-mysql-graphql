/*
*
*/
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt } from "graphql";
import { resolvers    }           from "./customer.resolvers" ;
import { updateCustomer }         from "./customer.resolvers";
import { typeCustomer }           from "./customer.types" ;
import { inputUpdateCustomer }    from "./customer.types" ;
//
const log = require("debug")("nodejs-mysql-graphql:schemaCustomerIndex")
//
const queryCustomers = () => {
    try {
        return {
            getCustomer:  {
              type:       new GraphQLList(typeCustomer) ,
              args:       { customerNumber: {type: new GraphQLNonNull(GraphQLInt)} } ,
              resolve(root?:any,args?:any){ 
                    let newArg={customerNumber:args.customerNumber} ;
                    return resolvers.Query.getCustomer(newArg);
                }
            },
            getCustomers: {
                type:     new GraphQLList(typeCustomer) ,
                resolve:  resolvers.Query.getCustomers
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