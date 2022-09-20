import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import PostsController from '@/controllers/posts.controller';
import validationMiddleware from '@middlewares/validation.middleware';

class PostsRoute implements Routes {
  public path = '/posts';
  public router = Router();
  public authController = new AuthController();
  public postsController = new PostsController();
  public postCon 

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.postsController.getPostById);
    this.router.post(`${this.path}/`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.get(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body'), this.authController.logIn);
    this.router.post(`${this.path}/:id/edit`, authMiddleware, this.authController.logOut);
    this.router.get(`${this.path}/:id/edit`, authMiddleware, this.authController.logOut);
    this.router.post(`${this.path}/:id/delete`, authMiddleware, this.authController.logOut);
  }
}

export default PostsRoute;
