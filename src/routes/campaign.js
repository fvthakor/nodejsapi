import CampaignController from '../controllers/CampaignController'
export default (router) => {
    router.get(`/api/campaigns`, CampaignController.getAll);
    router.post(`/api/campaign`,CampaignController.insert);
    router.put(`/api/campaign/:id`, CampaignController.update);
    router.delete(`/api/campaign/:id`, CampaignController.delete);
} 