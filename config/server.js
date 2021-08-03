import express from "express";
import bodyParser from 'body-parser'
import setRoutes from "./routes";
import verifyJwt from '../src/helpers/jwtVerify'
const server= express()

const disableJwt=['/api/login','/api/register','/api/register/admin']

server.use(bodyParser.json())
server.use(verifyJwt(disableJwt))

setRoutes(server)

export default server;