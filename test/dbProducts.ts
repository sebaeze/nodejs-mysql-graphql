/*
*
*/
import {  jest , describe, expect, it }      from "@jest/globals" ;
import 'dotenv/config' ;
import { mysqlModel }                  from "../src/db" ;
//
let dbModels = mysqlModel() ;
//
const fetchProductData = () => {
    return new Promise((respOk,respRech)=>{
        //
        console.log("fetchProductData::(A)") ;
        dbModels.products.sync()
            .then(()=>{
                console.log("fetchproductsData::...termine de conectar") ;
                return dbModels.products.findAll({ attributes:["productCode", "productName", "productLine", "productScale", "productVendor"],where: {"productCode":"S10_2016"}}) ;
            })
            .then((respAny:any)=>{
                respOk(respAny) ;
            })
            .catch((errMC)=>{
                console.log("fetchproductsData::***errMC: ",errMC) ;
                respRech(errMC) ;
            }) ;
        //
    }) ;
} ;
//
//fetchProductData().then( data => {console.log("...funciona: data: ",data,"***")} ) ;
//
describe("***test query products",()=>{
    it("test:productCode:S10_2016", ()=>{
        expect.assertions(1);
        return fetchProductData().then( data => expect(data).toHaveLength(1) ) ;
    }) ;
}) ;
//