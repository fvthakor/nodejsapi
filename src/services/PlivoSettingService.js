import Service from "./Service";
class PlivoSettingService extends Service {
    constructor(model) {
      super(model);
    }

    async getAll(id){
      try {
        let items = await this.model.findOne()
      return {
        error: false,
        statusCode: 200,
        data: items
      }; 
      } catch (error) {
        return error;
      }
    }
  };
  
  export default PlivoSettingService;