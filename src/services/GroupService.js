import Service from "./Service";
class GroupService extends Service {
    constructor(model) {
      super(model);
    }

    async getAll(){
      let items = await this.model.find().populate({path:'members',select:['-password']}).populate({path:'user_id',select:['name']})
      return {
        error: false,
        statusCode: 200,
        data: items
      };
    }
  };
  
  export default GroupService;