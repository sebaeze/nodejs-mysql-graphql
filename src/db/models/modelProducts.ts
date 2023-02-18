/*
*
*/
//
import { Sequelize, DataTypes } from 'sequelize';
import  _productConfig          from "../config/productTable.json" ;
//
const log           = require("debug")("nodejs-mysql-graphql:modelProducts") ;
const productConfig = _productConfig as IJson ;
//
export const ModelProducts = ( argSequelize: Sequelize ) => {
    try {
        //
        let configProduct2Sequelize:any = {} ;
        for ( let key in productConfig ){
            let dataTypeConfig = productConfig[key] ;
            switch( dataTypeConfig ){
                case "STRING":   configProduct2Sequelize[key] = DataTypes.STRING  ; break ;
                case "INTEGER":  configProduct2Sequelize[key] = DataTypes.INTEGER ; break ;
                case "TEXT":     configProduct2Sequelize[key] = DataTypes.TEXT    ; break ;
                case "DECIMAL":  configProduct2Sequelize[key] = DataTypes.DECIMAL ; break ;
                default:
                    console.log(`****ERROR: datatype unknown: '${productConfig[key]}'***`) ;
                    throw new Error(`****ERROR: datatype unknown: '${productConfig[key]}'***`) ;
                break ;
            } ;
        } ;
        //
        log("...configProduct2Sequelize: ",configProduct2Sequelize,";") ;
        //
       let outSequelize = argSequelize.define('products', configProduct2Sequelize ) ;
       /* {
            productCode:                DataTypes.STRING ,
            productName:                DataTypes.STRING ,
            productLine:                DataTypes.STRING ,
            productScale:               DataTypes.STRING ,
            productVendor:              DataTypes.STRING ,
            productDescription:         DataTypes.TEXT ,
            quantityInStock:            DataTypes.INTEGER ,
            buyPrice:                   DataTypes.DECIMAL ,
            MSRP:                       DataTypes.DECIMAL
        }) ;   
        */
        //
        return outSequelize ;
        //
    } catch(errMC){
        throw errMC ;
    } ;
} ;
//