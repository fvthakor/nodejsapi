import Controller from  './Controller';
import AuthService from '../services/AuthService';
import bcrypt from 'bcrypt';
import User from  "../models/User";
import jwt from 'jsonwebtoken'
import config from '../../config/config'
const authService = new AuthService(
  new User().getModel()
);

class AuthController extends Controller {

  constructor(service) {
    super(service);
    this.login=this.login.bind(this)
  }
  async login(req,res){
      try {
        const bodyPassword=req.body.password
        delete req.body.password
        const user = await this.service.login(req.body.email);
        if(user.error){
          console.log("inside user error")
          return res.status(user.statusCode).send(user);
        }
        const isMatch=await bcrypt.compare(bodyPassword,user.data.password);
        if(isMatch){
          const payload = {
            id: user.data._id,
            email: user.data.email,
            name: user.data.name,
            phone_number: user.data.phone_number,
            role:user.data.role,
            sender_id:user.data.assigned_number,
          };

            const accessToken = jwt.sign(payload, config.JWT_SECRET, {
              expiresIn: 60 * 60 * 12,
            });
            
            const response = {
              error:false,
              statusCode:200,
              token: accessToken,
              isAuthenticated: true
            };
            return res.status(user.statusCode).send(response); 
        } 
      } catch (error) {
        throw error;
      }
  }
} 

export default new AuthController(authService);