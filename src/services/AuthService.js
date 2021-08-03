import Service from "./Service";

class AuthService extends Service {
    constructor(model) {
      super(model);
    }
    async login(email){
        try {
          let item = await this.model.findOne({email})
          if(!item){
            return {
              error: true,
              statusCode: 401,
              messsage: "Invalid Username Or Password"
            };  
          }
          return {
            error: false,
            statusCode: 200,
            data: item
          };
        } catch (error) {
          throw error
        }
    }
  };
  
  export default AuthService;