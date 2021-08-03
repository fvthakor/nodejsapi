import Controller from  './Controller';
import BlacklistService from '../services/BlacklistService';
import Blacklist from  "../models/Blacklist";

const blacklistService = new BlacklistService(
  new Blacklist().getInstance()
);

class BlacklistController extends Controller {

  constructor(service) {
    super(service);
  }
  async getAll(req,res){
      return res.status(200).send(await this.service.getAll(req.user.id))
  }
  async insert(req,res){
    return res.status(200).send(await this.service.insert({...req.body,user_id:req.user.id}))
  }
} 

export default new BlacklistController(blacklistService);