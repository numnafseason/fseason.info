const router = require('express').Router();
const authController = require('../controllers/auth.controller')

router.post("/api/login", (req, res) => res.send('Home'));
routes.get('/api/register', authController.Register); 



module.exports=router;