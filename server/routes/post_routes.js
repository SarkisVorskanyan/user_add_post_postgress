import { Router } from "express";
import post_controller from "../controller/post_controller.js";

const postRouter = new Router

postRouter.post('/post', post_controller.createPost)
postRouter.get('/post', post_controller.getPostByUser)

export default postRouter