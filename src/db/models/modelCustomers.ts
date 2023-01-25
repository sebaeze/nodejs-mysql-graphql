/*
*
*/
import { Sequelize, DataTypes } from 'sequelize';
//
export const ModelCustomer = ( argSequelize: Sequelize ) => {
    try {
        //
       let outSequelize = argSequelize.define('customers', {
                customerNumber:         DataTypes.STRING ,
                customerName:           DataTypes.STRING ,
                contactLastName:        DataTypes.STRING ,
                contactFirstName:       DataTypes.STRING ,
                phone:                  DataTypes.STRING ,
                addressLine1:           DataTypes.STRING ,
                addressLine2:           DataTypes.STRING ,
                city:                   DataTypes.STRING ,
                state:                  DataTypes.STRING ,
                postalCode:             DataTypes.STRING ,
                country:                DataTypes.STRING ,
                salesRepEmployeeNumber: DataTypes.INTEGER ,
                creditLimit:            DataTypes.DECIMAL
            }) ;   
        //
        return outSequelize ;
        //
    } catch(errMC){
        throw errMC ;
    } ;
} ;
//