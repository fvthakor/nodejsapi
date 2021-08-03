import Service from "./Service";
class BlacklistService extends Service {
    constructor(model) {
      super(model);
    }

    async getAll(id){
      let items = await this.model.find({user_id:id}).populate({path:'user_id',select:['name']})
      return {
        error: false,
        statusCode: 200,
        data: items
      };
    }
  };
  
  export default BlacklistService;