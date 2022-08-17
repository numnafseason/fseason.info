import { NextFunction, Request, Response } from "express";
import {pool} from "@utils/database";
import bcryptjs from "bcryptjs";

const db = pool;
const {
  registerValidator,
  loginValidator,
} = require("../validators/userValidator");
//const RegisterValidation = require('../validation/RegisterValidation');

//
const Login = async (req :Request, res:Response) => {
  const body = req.body;
  const { error } = loginValidator(body);

  if (error) {
    return res.status(400).send(error.details);
  }

  const query = `SELECT * FROM user WHERE email=?`;
  const [user] = await db.query(query, [req.body.email]);

  if (
    !user ||
    user.length === 0 ||
    !(await bcryptjs.compare(req.body.password, user[0].password))
  ) {
    return res.status(400).send({
      message: "invalid credentials!",
    });
  }
  res.json({
    message: user[0].name,
  });
};
const Register = async (req, res) => {
  const body = req.body;
  const { error } = registerValidator(body);

  if (error) {
    return res.status(400).send(error.details);
  }
  if (body.password !== body.password_confirm) {
    return res.status(400).send({
      message: "Password's do not match",
    });
  }

  const data = [
    req.body.name,
    req.body.email,
    await bcryptjs.hash(body.password, 10),
    req.body.role_id,
  ];
  const result = await db.query(
    "INSERT INTO user (name,email,password,role_id) values (?)",
    [data]
  );
  console.log(result);
  res.send(result);
};
//

module.exports = {
  Login,
  Register,
};
