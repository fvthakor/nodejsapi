import PlivoController from '../controllers/plivoController'
export default (router) => {
    router.get(`/api/numbers`, PlivoController.getNumbers);
    router.post(`/api/number/buy`,PlivoController.buyNumber);
} 