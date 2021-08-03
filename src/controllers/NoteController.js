import Controller from  './Controller';
import NoteService from '../services/NoteService';
import Note from  "../models/Note";

const noteService = new NoteService(
  new Note().getInstance()
);

class NoteController extends Controller {

  constructor(service) {
    super(service);
    this.getNote=this.getNote.bind(this)
  }

  async getNote(req,res){
      console.log("calling from getNote Controller",req.params)
      let response=await this.service.getNote(req.params.id)
      return res.status(response.statusCode).send(response);
  }
} 

export default new NoteController(noteService);