import Controller from  './Controller';
import SenderGroupService from '../services/SenderGroupService';
import SenderGroup from  "../models/SenderGroup";

const senderGroupService = new SenderGroupService(
  new SenderGroup().getInstance()
);

class SenderGroupController extends Controller {

  constructor(service) {
    super(service);
  }
} 

export default new SenderGroupController(senderGroupService);