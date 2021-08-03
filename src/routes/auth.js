import AuthController from '../controllers/AuthController'
export default (router) => {
    router.post(`/api/login`, AuthController.login);
}