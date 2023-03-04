/*
*   Test GraphQL endpoint query data for 1 product
*/
import axios               from "axios" ;
import { describe, expect, it }    from "@jest/globals" ;
//
describe("__TEST:query GraphQL product endpoint",()=>{
    //
    it("..graphql::queryProduct:",async ()=>{
        const query = `
            query {
                queryProduct(productCode:"S10_1678"){
                    productCode,productName,productScale
                }
            }
        ` ;
        //
        const response = await axios({url: "http://localhost:4000/graphql",method:"post",data:{query:query}}) ;
        //
        expect(response.data.data.queryProduct).toHaveLength(1) ;
        //
    }) ;
    //
}) ;
//