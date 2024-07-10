const UserService = require("../../service/admin/UserService")

const UserController = {
    login: async(req, res) => {
        // req.body
        var result = await UserService.login(req.body)
        if (result.length === 0) {
            res.send({
                code: -1,
                error: "用户名或密码错误"
            })
        } else {
            res.send({
                code: "200",
                msg: "登录成功，OK"
            })
        }
    }
}





module.exports = UserController