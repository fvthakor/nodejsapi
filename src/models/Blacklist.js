import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class Blacklist{
 
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
                    number:{
                        type:String,
                    }
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("blacklist", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('blacklist')
    }
}

export default Blacklist;