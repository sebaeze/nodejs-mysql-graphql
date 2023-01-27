/*  */
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
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
import { graphqlHTTP } from "express-graphql" ;
/*
import { buildSchema } from "graphql" ;
//
const users = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
    { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
] ;
//
const schema = buildSchema(`
    input UserInput {
        email: String!
        name: String!

    }

    type User {
        id: Int!
        name: String!
        email: String!
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: Int!, input: UserInput): User
    }

    type Query {
        getUser(id: String): User
        getUsers: [User]
    }
`) ;
//
type User = {
    id: number
    name: string
    email: string
}

type UserInput = Pick<User, "email" | "name"> ;
const getUser = (args: { id: number }): User | undefined =>
    users.find(u => u.id === args.id)

const getUsers = (): User[] => users

const createUser = (args: { input: UserInput }): User => {
    const user = {
        id: users.length + 1,
        ...args.input,
    }
    users.push(user)

    return user
}

const updateUser = (args: { user: User }): User => {
    const index = users.findIndex(u => u.id === args.user.id)
    const targetUser = users[index]

    if (targetUser) users[index] = args.user

    return targetUser
}

const root = {
    getUser,
    getUsers,
    createUser,
    updateUser,
};
*/
//
import { resolvers, schema }   from "./src/schema/customer" ;
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
/*
import { mysqlModel } from "./src/db" ;
//
console.log("...process.env.MYSQL_DB_NAME: ",process.env.MYSQL_DB_NAME,";") ;
//
let dbModels = mysqlModel() ;
dbModels.customers.sync()
    .then(()=>{
        console.log("...termine de conectar") ;
        return dbModels.customers.findAll({attributes: ['customerName', 'addressLine1'],where: {customerNumber: 112}}) ;
    })
    .then((respArr)=>{
        console.log("..segund then:: respArr: ",respArr,";") ;
    })
    .catch((errMC)=>{
        console.log("***ERROR: ",errMC) ;
    }) ;
*/
//
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
//