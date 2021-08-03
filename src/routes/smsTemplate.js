import SmsTemplateController from '../controllers/SmsTemplateController'
export default (router) => {
    router.get(`/api/templates`, SmsTemplateController.getAll);
    router.post(`/api/template`,SmsTemplateController.insert);
    router.put(`/api/template/:id`, SmsTemplateController.update);
    router.delete(`/api/template/:id`, SmsTemplateController.delete);
}