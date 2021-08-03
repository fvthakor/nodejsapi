import server from '../config/server'
import '../config/database'

const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`LISNING SERVER ON PORT ${PORT}`)
})