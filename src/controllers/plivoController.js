import client from '../helpers/plivoConnect'



class PlivoController  {
    async getAvaliableNumbers(){
        try {
            
        } catch (error) {
            
        }
    }
    async getNumbers(req,res){
        try {
            const number=await client.numbers.search(req.body.country_iso)
            return res.send(number)   
        } catch (error) {
            console.error(error);
            return res.send(error)

        }
    }
    async buyNumber(req,res){
        try {
            const item=await client.numbers.buy(req.body.number)
            return res.send(item)   
        } catch (error) {
            console.error(error);
            return res.send(error)
        }
    }
    async quickSms(body){
        try {
            const item= await client.messages.create(body.sender_number,body.number,body.details);
            return item
        } catch (error) {
            console.error(error);
            return error
        }
    }
    async getAllSmsStatus(){
        const sent =await  client.messages.list(
            {
                limit:0,
                message_state:'sent'
            }
        ).objects
        sent===undefined?console.log("no record found"):console.log(sent);
        const delivered=0
        const failed=0
        const queued=0
        return {
            sent,
            delivered,
            failed,
            queued
        }
    }
    async bulkSms(body){
        try {
            const item= await client.messages.create(body.sender_number,body.numbers.join('<'),body.details);
            return item
        } catch (error) { 
            console.error(error);
            return error
        }
    }
} 

export default new PlivoController();