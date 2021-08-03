import GroupController from '../controllers/GroupController'
export default (router) => {
    router.get(`/api/groups`, GroupController.getAll);
    router.post(`/api/group`,GroupController.insert);
    router.put(`/api/group/:id`, GroupController.update);
    router.delete(`/api/group/:id`, GroupController.delete);
}