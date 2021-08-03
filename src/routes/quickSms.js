import QuickSmsController from '../controllers/QuickSmsController'
export default (router) => {
    router.get(`/api/quicksms`, QuickSmsController.getAll);
    router.post(`/api/quicksms`,QuickSmsController.insert);
    router.delete(`/api/quicksms/:id`, QuickSmsController.delete);
}