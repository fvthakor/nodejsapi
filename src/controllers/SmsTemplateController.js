import Controller from  './Controller';
import SmsTemplateService from '../services/SmsTemplateService';
import SmsTemplate from  "../models/SmsTemplate";

const smsTemplateService = new SmsTemplateService(
  new SmsTemplate().getInstance()
);

class SmsTemplateController extends Controller {

  constructor(service) {
    super(service);
  }
} 

export default new SmsTemplateController(smsTemplateService);