import Controller from  './Controller';
import CampaignService from '../services/CampaignService';
import Campaign from  "../models/Campaign";

const campaignService = new CampaignService(
  new Campaign().getInstance()
);

class CampaignController extends Controller {

  constructor(service) {
    super(service);
  }
} 

export default new CampaignController(campaignService);