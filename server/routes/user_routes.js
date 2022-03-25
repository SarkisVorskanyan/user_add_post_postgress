import  Router  from "express";
import user_controller from "../controller/user_controller.js";

const router = new Router

router.post('/user', user_controller.createUser)
router.get('/user', user_controller.getUsers)
router.get('/user/:id', user_controller.getOneUser)
router.put('/user', user_controller.updateUser)
router.delete('/user', user_controller.deleteUser)

export default router