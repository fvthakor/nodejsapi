import Service from "./Service";
class NoteService extends Service {
    constructor(model) {
      super(model);
    }
    async getAll(query) {
      let { skip, limit } = query;
  
      skip = skip ? Number(skip) : 0;
      limit = limit ? Number(limit) : 10;
  
      delete query.skip;
      delete query.limit;
  
      if (query._id) {
        try {
          query._id = new mongoose.mongo.ObjectId(query._id);
        } catch (error) {
          console.log("not able to generate mongoose id with content", query._id);
        }
      }
  
      try {
        let items = await this.model
          .find(query)
          .select(['-password'])
          .skip(skip)
          .limit(limit).populate({path:'user_id',select:['name']})
        let total = await this.model.count();
  
        return {
          error: false,
          statusCode: 200,
          data: items,
          total
        };
      } catch (errors) {
        console.error(errors)
        return {
          error: true,
          statusCode: 500,
          errors
        };
      }
    }
    async getNote(id){
        try {
          let item = await this.model.findById(id).populate({path:'user_id',select:['name']});
          return {
            error: false,
            statusCode: 200,
            data: item
          };
        } catch (error) {
          return {
            error:true,
            statusCode:403,
            message:error
          };
        }
    }

  };
  
  export default NoteService;