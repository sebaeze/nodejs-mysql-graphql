/*  */
import express, { Express, Request, Response } from 'express';
import dotenv                                  from 'dotenv';
import { graphqlHTTP }                         from "express-graphql" ;
import { resolvers, schema }                   from "./src/schema/customer" ;
//
dotenv.config();
//
const app: Express = express();
const port = process.env.PORT||3000;
//
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
//
console.log("...resolvers: ",resolvers) ;
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: {...resolvers.Query},
        graphiql: true,
    })
) ;
//
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//