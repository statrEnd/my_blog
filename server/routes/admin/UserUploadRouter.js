var express = require('express');
const UseruploadController = require('../../controllers/admin/UseruploadController.js');
var UserRouter = express.Router();


// 头像上传接口
UserRouter.post("/adminapi/user/upload", UseruploadController.upload)

module.exports = UserRouter;