/*
*   Define connection to MySQL and export Models
*/
import { Sequelize }          from "sequelize";
import { ModelCustomer }      from "./modelCustomers" ;
import { ModelProducts }      from "./modelProducts" ;
//
declare var process : {
    env: {
        MYSQL_DB_NAME:  string ,
        MYSQL_CONNECTION_USER:     string ,
        MYSQL_PASSWORD: string ,
        MYSQL_DB_URL:   string ,
        MYSQL_DB_PORT:  number
    }
} ;
//
export const mysqlModel = () => {
    try {
        //
        const sequelize = new Sequelize(
            process.env.MYSQL_DB_NAME ,
            process.env.MYSQL_CONNECTION_USER ,
            process.env.MYSQL_PASSWORD ,
            {
                host:    process.env.MYSQL_DB_URL ,
                port:    process.env.MYSQL_DB_PORT ,
                dialect: 'mysql'
            }
        ) ;
        //
        return{ 
            customers: ModelCustomer( sequelize ) ,
            products:  ModelProducts( sequelize )
        } ;
        //
    } catch(errMM){
        console.log("ERROR: ",errMM," ***") ;
        throw errMM ;
    } ;
} ;
//
export {
    ModelCustomer 
} ;
//
