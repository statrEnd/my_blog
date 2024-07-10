const UserUploadService = require("../../service/admin/UserService")

const UserControllerupload = {
    upload: async(req, res) => {
        // req.body
        console.log(req.body);
        var result = await UserUploadService.upload(req.body)
        if (result.length === 0) {
            res.send({
                code: -1,
                error: "上传出错了"
            })
        } else {
            res.send({
                code: "200",
                msg: "上传图片成功"
            })
        }
    }
}

module.exports = UserControllerupload