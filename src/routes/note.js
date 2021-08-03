import NoteController from '../controllers/NoteController'
export default (router) => {
    router.get(`/api/notes`, NoteController.getAll);
    router.post('/api/note',NoteController.insert)
    router.get(`/api/note/:id`,NoteController.getNote);
    router.put(`/api/note/:id`, NoteController.update);
    router.delete(`/api/note/:id`, NoteController.delete);
}