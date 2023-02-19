/*
*
*/
//
import { Sequelize, DataTypes }    from 'sequelize';
import  _productConfig             from "../config/productTable.json" ;
import { parseConfig2Sequelize }   from "./util" ;
//
const log           = require("debug")("nodejs-mysql-graphql:modelProducts") ;
const productConfig = _productConfig as IJson ;
//
export const ModelProducts = ( argSequelize: Sequelize ) => {
    try {
        //
        return( argSequelize.define('products', parseConfig2Sequelize(productConfig) ) );
        //
    } catch(errMC){
        throw errMC ;
    } ;
} ;
//