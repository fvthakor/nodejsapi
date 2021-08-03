import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class SenderGroup{
 
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
                    numbers:[{
                        type:String,
                    }],
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("sender_groups", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('sender_groups')
    }
}

export default SenderGroup;