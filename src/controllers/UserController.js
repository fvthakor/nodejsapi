import Controller from  './Controller';
import UserService from '../services/UserService';
import User from  "../models/User";
import bcrypt from 'bcrypt'

const userService = new UserService(
  new User().getInstance()
);

class UserController extends Controller {

  constructor(service) {
    super(service);
    this.getUser=this.getUser.bind(this)
    this.addAdmin=this.addAdmin.bind(this)
    this.addUser=this.addUser.bind(this)
  }

  async addUser(req,res){
    delete req.body.role;
    const hash=await bcrypt.hash(req.body.password,12)
    let response = await this.service.insert({...req.body,password:hash});
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
  async addAdmin(req,res){
    //delete req.body.role;
    console.log(req.body);
    const hash=await bcrypt.hash(req.body.password,12)
    let response = await this.service.addAdmin({...req.body,password:hash});
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
  async getUser(req,res){
      console.log("calling from getUser Controller",req.params)
      return res.status(200).send(await this.service.getUser(req.params.id));
  }
} 

export default new UserController(userService);