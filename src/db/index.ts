/*
*
*/
import { mysqlModel } from "./models" ; 
export * from "./models" ;
//
const log = require("debug")("nodejs-mysql-graphql:db-index") ;
//
let dbModels = mysqlModel() ;
const ARRAY_FIELDS_CUSTOMER = ['customerNumber', 'customerName', 'contactLastName', 'contactFirstName', 'phone', 'addressLine1', 'addressLine2', 'city', 'state', 'postalCode', 'country', 'salesRepEmployeeNumber', 'creditLimit'] ;
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
export const fetchCustomerData = (argFetch?:{customerNumber?:number}) => {
    return new Promise((respOk,respRech)=>{
        try {
            //
            let whereCondition:{where?:any} = {} ;
            if ( argFetch!=undefined && argFetch.customerNumber!=undefined ){
                whereCondition = { where: argFetch } ;
            } ;
            //
            dbModels.customers.sync()
                .then(()=>{
                    return dbModels.customers.findAll({attributes: ARRAY_FIELDS_CUSTOMER , ...whereCondition }) ;
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
export const asyncFetchData = async (args?:any) => {
    try {
        return await fetchCustomerData(args) ;
    } catch(errFD){
        console.log("***ERROR: ",errFD,"***")   ;
        throw errFD ;
    } ;
} ;
//
export const updateCustomer = async ( argCustomer2update: ICustomer2Update ) => {
    try {
        //
        log("...updateCustomer::number: ",argCustomer2update.customerNumber," argCustomer2update: ",argCustomer2update,"**") ;
        //
        let {customerNumber:_,...fields2update} = {...argCustomer2update} ;
        //
        const recordUpdated = await dbModels.customers.update( fields2update, {silent: true, where:{customerNumber: argCustomer2update.customerNumber}} ) ;
        log("...recordUpdated: ",recordUpdated,";") ;
        //
        return [argCustomer2update] ;
        //
    } catch(errFCD){
        console.log("***ERROR::updateCustomer: ",errFCD," ***") ;
    } ;
} ;
//