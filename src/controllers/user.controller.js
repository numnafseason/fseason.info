const { loginValidator } = require("../validators/userValidator")

function login(req,res) {
    const{error}=loginValidator(req.body)

    const token = 'test';
    res.header("Access-Control-Expose-headers", "x-auth-token")
        .header("x-auth-token", token).send(true)
}

module.exports={
    login,
}