import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class QuickSms{
 
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
        mongoose.model("quick_sms", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('quick_sms')
    }
}

export default QuickSms;