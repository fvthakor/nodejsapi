import SenderGroupController from '../controllers/SenderGroupController'
export default (router) => {
    router.get(`/api/sendergroups`, SenderGroupController.getAll);
    router.post(`/api/sendergroup`,SenderGroupController.insert);
    router.put(`/api/sendergroup/:id`, SenderGroupController.update);
    router.delete(`/api/sendergroup/:id`, SenderGroupController.delete);
}