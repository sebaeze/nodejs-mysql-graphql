/*
*
*/
import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt } from "graphql";
import { resolvers    }    from "./customer.resolvers" ;
import { typeCustomer }    from "./customer.types" ;
//
//
export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: () => ({
            getCustomer:  {
              type:       new GraphQLList(typeCustomer) ,
              args:       { customerNumber: {type: new GraphQLNonNull(GraphQLInt)} } ,
              resolve(root,args){ 
                    let newArg={customerNumber:args.customerNumber}; 
                    return resolvers.Query.getCustomer(newArg);
                }
            },
            getCustomers: {
                type:     new GraphQLList(typeCustomer) ,
                resolve:  resolvers.Query.getCustomers
            }
        })
    })
}) ;
//