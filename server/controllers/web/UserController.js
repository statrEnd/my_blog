const UserService = require("../../service/web/UserService");

const UserController = {
    login: async(req, res) => {
        // req.body
        // const userId = req.params.id

        var result = await UserService.login(req.params.id)
        if (result.length === 0) {
            res.send({
                code: -1,
                error: "出错了",
            })
        } else {
            const user = result[0];
            const userData = {
                id: user.user_id,
                username: user.username,
                email: user.email,
                nickname: user.nickname,
                create_at: user.created_at,
                avater: user.head_avater
                    // 其他用户基本信息...
            };
            res.send({
                code: 200,
                msg: "ok",
                userData
            })
        }
    }
}
module.exports = UserController