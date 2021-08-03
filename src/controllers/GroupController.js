import Controller from  './Controller';
import GroupService from '../services/GroupService';
import Group from  "../models/Group";

const groupService = new GroupService(
  new Group().getInstance()
);

class GroupController extends Controller {

  constructor(service) {
    super(service);
  }
} 

export default new GroupController(groupService);