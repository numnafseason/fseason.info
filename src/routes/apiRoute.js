const router = require('express').Router();
const authController = require('../controllers/auth.controller')

router.post("/api/login", authController.Login);
router.post('/api/register', authController.Register); 



module.exports=router;