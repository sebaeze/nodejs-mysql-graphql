/*
*
*/
import { mysqlModel } from "../../db" ;
//
let dbModels = mysqlModel() ;
const ARRAY_FIELDS = ['customerNumber', 'customerName', 'contactLastName', 'contactFirstName', 'phone', 'addressLine1', 'addressLine2', 'city', 'state', 'postalCode', 'country', 'salesRepEmployeeNumber', 'creditLimit'] ;
//
export const resolvers = {
    //
    Query: {
        getCustomers: () => {
            //
            console.log("..estoy en getcusomter ???") ;
            /*
            return [{
                customerNumber: 1,
                customerName: "seba",
                contactLastName: "andreole",
                contactFirstName: "nose"
            }]  ;
            */
            //
            dbModels.customers.sync()
                .then(()=>{
                    console.log("...termine de conectar") ;
                    return dbModels.customers.findAll({attributes: ARRAY_FIELDS ,where: {customerNumber: [112,114]}}) ;
                })
                .then((respQry: [any])=>{
                    // console.log("...respQry: ",respQry) ;
                    for ( let posR=0; posR<respQry.length; posR++ ){
                        const { customers } = respQry[posR] ;
                        console.log("elem: ",customers.dataValues ) ;
                    } ;
//                    respQry.customers
                    return respQry ;
                })
                .catch((errMC)=>{
                    console.log("***errMC: ",errMC) ;
                    return [{customerName:"error"}]
                }) ;
            //
        }
    }
} ;
//