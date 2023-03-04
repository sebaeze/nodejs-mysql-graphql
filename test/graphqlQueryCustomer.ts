/*
*   Test GraphQL endpoint query data for 1 customer
*/
import axios               from "axios" ;
import { describe, expect, it }    from "@jest/globals" ;
//
describe("__TEST:query GraphQL customer endpoint",()=>{
    //
    it("..axios:",async ()=>{
        const query = `
            query {
                getCustomer(customerNumber:112){
                customerName,phone,creditLimit
                }
            }
        ` ;
        //
        const response = await axios({url: "http://localhost:4000/graphql",method:"post",data:{query:query}}) ;
        //
        expect(response.data.data.getCustomer).toHaveLength(1) ;
        //
    }) ;
    //
}) ;
//