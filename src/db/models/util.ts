/*
*
*/
import { DataTypes }                   from "sequelize" ;
//
const log = require("debug")("nodejs-mysql-graphql:parseConfig2Sequelize") ;
//
export const parseConfig2Sequelize = ( argConfig: IJson ):any => {
    try {
        let configProduct2Sequelize:any = {} ;
        for ( let key in argConfig ){
            let dataTypeConfig = argConfig[key] ;
            switch( dataTypeConfig ){
                case "STRING":   configProduct2Sequelize[key] = DataTypes.STRING  ; break ;
                case "INTEGER":  configProduct2Sequelize[key] = DataTypes.INTEGER ; break ;
                case "TEXT":     configProduct2Sequelize[key] = DataTypes.TEXT    ; break ;
                case "DECIMAL":  configProduct2Sequelize[key] = DataTypes.DECIMAL ; break ;
                default:
                    console.log(`****ERROR: datatype unknown: '${argConfig[key]}'***`) ;
                    throw new Error(`****ERROR: datatype unknown: '${argConfig[key]}'***`) ;
                break ;
            } ;
        } ;

    } catch(errPCS){
        console.log("***ERROR::parseConfig2Sequelize: ",errPCS,"***") ;
        throw errPCS ;
    } ;
} ;