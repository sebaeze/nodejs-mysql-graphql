/*
*  export all the GraphQL schemas
*/
//
import { GraphQLSchema }       from "graphql" ;
import { GraphQLObjectType }   from "graphql" ;
import { queryCustomers }      from "./customer" ;
import { mutationCustomers }   from "./customer" ;
import { queryProducts  }      from "./products" ;
//
const qryCustomer = queryCustomers() ;
const qryProduct  = queryProducts()  ;
const query = {
    ...qryCustomer ,
    ...qryProduct
} ;
//
export const schema = new GraphQLSchema({
    query:    new GraphQLObjectType({ name: "Query"    , fields: query }) ,
    mutation: new GraphQLObjectType({ name: "Mutation" , fields: mutationCustomers })
}) ;
//