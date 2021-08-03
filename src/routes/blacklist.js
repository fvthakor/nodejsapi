import BlacklistController from '../controllers/BlacklistController'
export default (router) => {
    router.get(`/api/blacklist`, BlacklistController.getAll);
    router.post(`/api/blacklist`,BlacklistController.insert);
    router.put(`/api/blacklist/:id`, BlacklistController.update);
    router.delete(`/api/blacklist/:id`, BlacklistController.delete);
}