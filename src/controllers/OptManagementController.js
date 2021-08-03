import Controller from  './Controller';
import OptManagementService from '../services/OptManagementService';
import OptManagement from  "../models/OptManagement";

const optManagementService = new OptManagementService(
  new OptManagement().getInstance()
);

class OptManagementController extends Controller {

  constructor(service) {
    super(service);
  }
} 

export default new OptManagementController(optManagementService);