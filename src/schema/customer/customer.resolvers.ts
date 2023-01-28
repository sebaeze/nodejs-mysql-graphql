/*
*
*/
import { mysqlModel } from "../../db" ;
//
let dbModels = mysqlModel() ;
const ARRAY_FIELDS = ['customerNumber', 'customerName', 'contactLastName', 'contactFirstName', 'phone', 'addressLine1', 'addressLine2', 'city', 'state', 'postalCode', 'country', 'salesRepEmployeeNumber', 'creditLimit'] ;
//
const fetchCustomerData = (customerNumber:number) => {
    return new Promise((respOk,respRech)=>{
        try {
            //
            dbModels.customers.sync()
                .then(()=>{
                    console.log("fetchCustomerData::...termine de conectar") ;
                    return dbModels.customers.findAll({attributes: ARRAY_FIELDS ,where: {customerNumber: customerNumber}}) ;
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
export const resolvers = {
    //
    Query: {
        getCustomers: async (props:{customerNumber:number}) => {
            //
            console.log("...props: ",props,";");
            return await fetchCustomerData(props.customerNumber) ;
            //
        }
    }
} ;
//