import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class Note{
 
    initSchema(){
        const schema = new Schema(
            {
                    user_id:{
                        type: Schema.Types.ObjectId,
                        ref:'users',
                        required:true
                    },
                    mobileno:{
                        type: String,
                    },
                    message:{
                        type:String,
                    }
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("notes", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('notes')
    }
}

export default Note;