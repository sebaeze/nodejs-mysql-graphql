/*  */
import 'dotenv/config' ;
import express, { Express, Request, Response }    from 'express' ;
import { graphqlHTTP }                            from "express-graphql" ;
import { schema  }                             from './src/schema' ;
import cors                                    from "cors" ;
//
const log = require("debug")("nodejs-mysql-graphql:app.ts")
//
const app: Express = express();
const port = process.env.PORT||4000;
//
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
//
app.use( cors() );
app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema ,
        graphiql: true,
    })
) ;
//
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}/graphql`);
});
//