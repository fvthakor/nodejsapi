import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class SmsTemplate{
 
    initSchema(){
        const schema = new Schema(
            {
                    user_id:{
                        type: Schema.Types.ObjectId,
                        ref:'users',
                        required:true
                    },
                    name:{
                        type: String,
                    },
                    details:{
                        type:String,
                    }
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("sms_templates", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('sms_templates')
    }
}

export default SmsTemplate;