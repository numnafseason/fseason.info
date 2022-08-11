const express = require('express');
const blogController = require('../controllers/blog.controller')

const routes = express.Router();

routes.get('/', blogController.Home); 
routes.get('/posts', blogController.blogList);
routes.post('/posts', blogController.blogInsert);
routes.get('/new-post', blogController.blogCreate);

routes.get('/posts/:id', blogController.blogDetail);
routes.get('/posts/:id/edit', blogController.blogEdit);
routes.post('/posts/:id/edit', blogController.blogUpdate);
routes.post('/posts/:id/delete', blogController.blogDelete);

module.exports = routes;
