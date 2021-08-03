import Controller from  './Controller';
import PlivoSettingService from '../services/PlivoSettingService';
import PlivoSetting from  "../models/PlivoSetting";

const plivoSettingService = new PlivoSettingService(
  new PlivoSetting().getInstance()
);

class PlivoSettingController extends Controller {

  constructor(service) {
    super(service);
  }
  async getAll(req,res){
    if(res){
    return res.status(200).send(await this.service.getAll());
    }
    const {data}=await this.service.getAll(req)
    return data
  }
  async insert(req,res){
    return res.status(200).send(await this.service.insert(req.body))
  }
} 

export default new PlivoSettingController(plivoSettingService);