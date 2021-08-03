import mongoose,{Schema} from 'mongoose';
import uniqueValidator from "mongoose-unique-validator";
class VideoManagement{
 
    initSchema(){
        const schema = new Schema(
            {
                    user_id:{
                        type: Schema.Types.ObjectId,
                        ref:'users',
                        required:true
                    },
                    title:{
                        type: String,
                    },
                    video_url:{
                        type:String,
                    }
            },{
                timestamps: true,
            }
        )
        schema.plugin(uniqueValidator);
        mongoose.model("video_management", schema);
    }
    getInstance(){
        this.initSchema()
        return mongoose.model('video_management')
    }
}

export default VideoManagement;