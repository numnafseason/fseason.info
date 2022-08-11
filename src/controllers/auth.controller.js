const db = require('../utils/database');
const bcryptjs = require('bcryptjs'); 
const RegisterValidation = require('../validation/RegisterValidation');

//
const Login = async (req, res) => {
    const query = `SELECT * FROM user WHERE email=?`;
    const [user] = await db.query(query, [req.body.email])

    if ((!user || user.length === 0) ||
        (!await bcryptjs.compare(req.body.password, user[0].password))
    ){
        return res.status(400).send({
            message: 'invalid credentials!'
        })
    }
    res.json({
        message: user[0].name
    });
}
const Register = async (req, res) => {
    const body = req.body;

    const { error } = RegisterValidation.validate(body);

    if (error) {
        return res.status(400).send(error.details);
    }

    if (body.password !== body.password_confirm) {
        return res.status(400).send({
            message: "Password's do not match"
        });
    }

    const repository = getManager().getRepository(User);

    const { password, ...user } = await repository.save({
        name: body.name,
        email: body.email,
        password: await bcyptjs.hash(body.password, 10)
    });

    res.send(user);
}
//


module.exports = {
    Login,
    Register
};