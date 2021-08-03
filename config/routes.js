import router from "../src/routes"
export default (server) => {
   server.use('/',router)
}
