/*
*  export all the GraphQL schemas
*/
import { GraphQLInt, GraphQLFloat , GraphQLString } from 'graphql' ;
import * as customer  from "./customer" ;
import * as product   from "./products" ;
//
export const parseConfigToGraphqlFields:any = (argConfig:IJson) => {
    try {
        let outGraphqlSchema:any = {} ;
        //
        for ( let key in argConfig ){
            switch( argConfig[key] ){
                case "STRING":      outGraphqlSchema[key]={type:GraphQLString}  ;  break ;
                case "INTEGER":     outGraphqlSchema[key]={type:GraphQLInt}     ;  break ;
                case "DECIMAL":     outGraphqlSchema[key]={type:GraphQLFloat}   ;  break ;
                case "TEXT":        outGraphqlSchema[key]={type:GraphQLString}  ;  break ;
                default:
                    console.log(`***ERROR: Graphql type unknown->'${argConfig[key]}' .`)
                    throw new Error(`***ERROR: Graphql type unknown->'${argConfig[key]}' .`);
                break ;
            } ;
        } ;
        //
        return outGraphqlSchema ;
    } catch(errPCG){
        console.log("***ERROR: ",errPCG) ;
        throw errPCG ;
    } ;
} ;
//
// console.log("...customer: ",customer,";") ;
//
export {
    customer ,
    product
} ;
//