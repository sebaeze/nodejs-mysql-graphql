/*
*
*/
import {  jest , describe, expect, it }      from "@jest/globals" ;
import 'dotenv/config' ;
import { mysqlModel }                  from "../src/db" ;
//
let dbModels = mysqlModel()    ;
//
const fetchProductData = (args?:{fields?:[string],condition?:{productCode:string}}) => {
    return new Promise((respOk,respRech)=>{
        //
        let ARRAY_FIELDS = ["productCode", "productName", "productLine", "productScale", "productVendor"]  ;
        let CONDITION    = {} ;
        //
        if ( args!=undefined ){
             if ( args.fields!=undefined ){
                ARRAY_FIELDS = args.fields ;
             } ;
             if ( args.condition!=undefined ){
                CONDITION = {where:args.condition} ;
             } ;
        };
        //
        dbModels.products.sync()
            .then(()=>{
                return dbModels.products.findAll({ attributes: ARRAY_FIELDS , ...CONDITION }) ;
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
describe("***test query products",()=>{
    it("test:productCode:S10_2016", ()=>{
        expect.assertions(1);
        return fetchProductData({condition:{productCode:"S10_4757"}}).then( data => expect(data).toHaveLength(1) ) ;
    }) ;
}) ;
//