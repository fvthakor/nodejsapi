import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class User{
 
    initSchema(){
        const schema = new Schema(
            {
                name:{
                    type: String,
                    required: true,
                },
                gender:{
                    type: String,
                },
                email:{
                    type:String,
                    required: true,
                    unique:true
                },
                phone_number:{
                    type:String,
                    required: true,
                },
                password:{
                    type: String,
                    required: true,
                },
                status:{
                    type: String,
                    enum:['active','inactive'],
                    default:'active'
                },
                role:{
                    type: String,
                    enum:['admin','user'],
                    default:'user'
                },
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("users", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('users')
    }

    getModel(){
        return mongoose.model('users')
    }

}

export default User;