import OptManagementController from '../controllers/OptManagementController'
export default (router) => {
    router.get(`/api/opts`, OptManagementController.getAll);
    router.post(`/api/opt`,OptManagementController.insert);
    router.put(`/api/opt/:id`, OptManagementController.update);
    router.delete(`/api/opt/:id`, OptManagementController.delete);
}