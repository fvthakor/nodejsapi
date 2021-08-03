import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class Group{
 
    initSchema(){
        const schema = new Schema(
            {
                    name:{
                        type: String,
                        unique:true
                    },
                    contacts:[
                        {
                            name:{
                                type: String,
                            },
                            numbers:[{
                                number:{
                                    type: String,
                                },
                                type:{
                                    type:String,
                                }
                                
                            }],
                            address:{
                                type:String,
                            },
                            zip_code:{
                                type:String,
                            },
                            state:{
                                type:String
                            },
                            city:{
                                type:String
                            },
                    } 
                    ]
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("groups", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('groups')
    }
}

export default Group;