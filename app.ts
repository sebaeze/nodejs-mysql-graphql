/*  */
import 'dotenv/config' ;
import express, { Express, Request, Response } from 'express' ;
import { graphqlHTTP }                         from "express-graphql" ;
// import { resolvers, schema }                   from "./src/schema/customer" ;
import { schema as schemaCustomer }            from "./src/schema/customer" ;
//
const app: Express = express();
const port = process.env.PORT||3000;
//
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
//
app.use(
    "/graphql",
    graphqlHTTP({
        schema:   schemaCustomer,
        graphiql: true,
    })
) ;
//
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//