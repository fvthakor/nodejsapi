import Controller from  './Controller';
import VideoManagementService from '../services/VideoManagementService';
import VideoManagement from  "../models/VideoManagement";

const videoManagementService = new VideoManagementService(
  new VideoManagement().getInstance()
);

class VideoManagementController extends Controller {

  constructor(service) {
    super(service);
  }

  async getAll(req,res){
      let response=await this.service.getAll(req.user.id)
      return res.status(response.statusCode).send(response);
  }
} 

export default new VideoManagementController(videoManagementService);