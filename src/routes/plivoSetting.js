import PlivoSettingController from '../controllers/PlivoSettingController'
export default (router) => {
    router.get(`/api/setting`, PlivoSettingController.getAll);
    router.post(`/api/setting`,PlivoSettingController.insert);
    router.put(`/api/setting/:id`, PlivoSettingController.update);
    router.delete(`/api/setting/:id`, PlivoSettingController.delete);
} 