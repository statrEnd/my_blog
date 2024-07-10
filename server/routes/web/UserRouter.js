var express = require('express');
const UserController = require('../../controllers/web/UserController.js');
var UserRouter = express.Router();

/* GET home page. */
// UserRouter.post("/adminapi/user/login", function() {})

// 登录接口
UserRouter.get("/webapi/user/:id", UserController.login)
module.exports = UserRouter;