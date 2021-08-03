import Service from "./Service";
class VideoManagementService extends Service {
    constructor(model) {
      super(model);
    }
    async getAll(id){
        try {
            const video=await this.model.findAll({user_id:id})
            return {
                error: false,
                statusCode: 200,
                data: video
              };           
        } catch (error) {
            return {
                error: true,
                statusCode: 403,
                message:error
              }
        }
    }
  };
  
  export default VideoManagementService;