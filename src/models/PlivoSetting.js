import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class PlivoSetting{
 
    initSchema(){
        const schema = new Schema(
            {
                    auth_id:{
                        type: String,
                        required:true
                    },
                    auth_token:{
                        type:String,
                        required:true,
                    },
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("plivo_setting", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('plivo_setting')
    }
}

export default PlivoSetting;