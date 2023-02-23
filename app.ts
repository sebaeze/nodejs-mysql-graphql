/*  */
import 'dotenv/config' ;
import express, { Express, Request, Response }    from 'express' ;
import { graphqlHTTP }                            from "express-graphql" ;
const { mergeTypeDefs } = require('@graphql-tools/merge') ;
import { schema as schemaCustomer }            from "./src/schema/customer" ;
import { schema as schemaProduct  }            from "./src/schema/products" ;
import cors                               from "cors" ;
//
const app: Express = express();
const port = process.env.PORT||4000;
//
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
/*
const mergedSchema = mergeTypeDefs([schemaCustomer,schemaProduct]) ;
console.log("...mergedSchema: ",mergedSchema,"\n\nschemaCustomer: ",schemaCustomer,";") ;
*/
app.use( cors() );
app.use(
    "/graphql",
    graphqlHTTP({
        //schema:   schemaCustomer,
        schema:   schemaProduct ,
        graphiql: true,
    })
) ;
//
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//