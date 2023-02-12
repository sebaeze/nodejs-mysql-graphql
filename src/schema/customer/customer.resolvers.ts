/*
*
*/
import { mysqlModel } from "../../db" ;
//
let dbModels = mysqlModel() ;
const ARRAY_FIELDS = ['customerNumber', 'customerName', 'contactLastName', 'contactFirstName', 'phone', 'addressLine1', 'addressLine2', 'city', 'state', 'postalCode', 'country', 'salesRepEmployeeNumber', 'creditLimit'] ;
const log = require("debug")("nodejs-mysql-graphql:customerResolvers") ;
//
interface ICustomer2Update {
    customerNumber:     number ,
    customcustomerName: string ,
    contactLastName?:   string ,
    contactFirstName?:  string ,
    phone?:             string ,
    creditLimit:        number
} ;
//
const fetchCustomerData = (customerNumber?:number) => {
    return new Promise((respOk,respRech)=>{
        try {
            //
            let whereCondition = {customerNumber:customerNumber} ;
            if ( customerNumber==undefined ){
                delete whereCondition.customerNumber  ;
            } ;
            //
            dbModels.customers.sync()
                .then(()=>{
                    console.log("fetchCustomerData::...termine de conectar") ;
                    return dbModels.customers.findAll({attributes: ARRAY_FIELDS ,where: {...whereCondition}}) ;
                })
                .then(respOk)
                .catch((errMC)=>{
                    console.log("fetchCustomerData::***errMC: ",errMC) ;
                    respRech([{customerName:"error"}]) ;
                }) ;
            //
        } catch(errFCD){
            console.log("fetchCustomerData::***ERROR: ",errFCD," ***") ;
            respRech(errFCD) ;
        } ;
    }) ;
} ;
//
export const updateCustomer = async ( argCustomer2update: ICustomer2Update ) => {
    try {
        //
        log("...updateCustomer::argCustomer2update: ",argCustomer2update,"**") ;
        /*
        for ( let key in argCustomer2update ){
            log("...key: ",key," value: ",argCustomer2update[key],";") ;
        };
        */
        return [argCustomer2update] ;
        //
    } catch(errFCD){
        console.log("fetchCustomerData::***ERROR: ",errFCD," ***") ;
    } ;
} ;
//
export const resolvers = {
    //
    Query: {
        getCustomer: async (props:{customerNumber:number}) => {
            return await fetchCustomerData(props.customerNumber) ;
        },
        getCustomers: async () => {
            return await fetchCustomerData() ;
        }
    }
} ;
//