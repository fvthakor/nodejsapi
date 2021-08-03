import Controller from  './Controller';
import QuickSmsService from '../services/QuickSmsService';
import QuickSms from  "../models/QuickSms";

const quickSmsService = new QuickSmsService(
  new QuickSms().getInstance()
);

class QuickSmsController extends Controller {

  constructor(service) {
    super(service);
  }
  async insert(req, res) {
    let response = await this.service.insert(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
} 

export default new QuickSmsController(quickSmsService);