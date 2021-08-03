import VideoManagementController from '../controllers/VideoManagementController'
export default (router) => {
    router.get(`/api/videos`, VideoManagementController.getAll);
    router.post(`/api/video`, VideoManagementController.insert);
    router.put(`/api/video/:id`, VideoManagementController.update);
    router.delete(`/api/video/:id`, VideoManagementController.delete);
}