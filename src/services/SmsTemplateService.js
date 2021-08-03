import Service from "./Service";
class SmsTemplateService extends Service {
    constructor(model) {
      super(model);
    }

    async getAll(){
      let items = await this.model.find().populate({path:'user_id',select:['name']})
      return {
        error: false,
        statusCode: 200,
        data: items
      };
    }
  };
  
  export default SmsTemplateService;