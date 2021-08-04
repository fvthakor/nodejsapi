import UserController from '../controllers/UserController'
//import PlivoController from '../controllers/plivoController'
export default (router) => {
    router.get(`/api/users`, UserController.getAll);
    router.get(`/api/user/:id`,UserController.getUser);
    router.post(`/api/register`, UserController.addUser);
    router.post(`/api/register/admin`,UserController.addAdmin);
    router.put(`/api/user/:id`, UserController.update);
    router.delete(`/api/user/:id`, UserController.delete);
    //router.get('/api/numbers',PlivoController.getNumbers)
}