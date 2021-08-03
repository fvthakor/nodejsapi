import Service from "./Service";

class UserService extends Service {
    constructor(model) {
      super(model);
    }
    async addAdmin(body){
      try {
       let item = await this.model.create({...body,role:"admin"}).select(["-password"])
       return {
        error: false,
        statusCode: 200,
        data: item
      }       
      } catch (error) {
        return {
          error: true,
          statusCode: 403,
          message: error
        }
      }
    }
    async getUser(id){
        try {
          console.log("calling from get user services",id)
          let item = await this.model.findById(id)
          return {
            error: false,
            statusCode: 200,
            data: item
          };
        } catch (error) {
          return {
            error: true,
            statusCode: 403,
            message:error
          };
        }
    }
    async getAll(){
      try {
        let item = await this.model.find({role:"employee"}).select(["-password"])
        return {
          error: false,
          statusCode: 200,
          data: item
        }
      } catch (error) {
        return {
          error: true,
          statusCode: 403,
          message: error
        }        
      }
    }

  };
  
  export default UserService;