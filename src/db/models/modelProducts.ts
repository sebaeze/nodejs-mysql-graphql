/*
*
*/
import { Sequelize, DataTypes } from 'sequelize';
//
export const ModelProducts = ( argSequelize: Sequelize ) => {
    try {
        //
       let outSequelize = argSequelize.define('products', {
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
        //
        return outSequelize ;
        //
    } catch(errMC){
        throw errMC ;
    } ;
} ;
//