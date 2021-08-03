import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class OptManagement{
 
    initSchema(){
        const schema = new Schema(
            {
                    user_id:{
                        type: Schema.Types.ObjectId,
                        ref:'users',
                        required:true
                    },
                    opt_out:{
                        type: String,
                    },
                    opt_text:{
                        type:String,
                    }
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("opt_management", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('opt_management')
    }
}

export default OptManagement;