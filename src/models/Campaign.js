import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class Campaign{
 
    initSchema(){
        const schema = new Schema(
            {
                    title:{
                        type: String,
                    },
                    user_id:{
                        type: Schema.Types.ObjectId,
                        ref:'users',
                        required:true
                    },
                    sender_id:{
                        type: Schema.Types.ObjectId,
                        ref:'sender_groups',
                        required:true
                    },
                    group_id:{
                        type:Schema.Types.ObjectId,
                        ref:'groups'
                    },
                    template_id:{
                        type:Schema.Types.ObjectId,
                        ref:'sms_templates'
                    },
                    respond:{
                        type:Boolean,
                        default:false
                    },
                    trash:{
                        type:Boolean,
                        default:false
                    },
                    status:{
                    type: String,
                    enum:['pending','done'],
                    default:'pending'
                }
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("campaigns", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('campaigns')
    }
}

export default Campaign;