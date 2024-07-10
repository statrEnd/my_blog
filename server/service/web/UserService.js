const db = require('../../config/db.config.js');
const UserService = {
    login: async(user_id) => {
        console.log(user_id);
        const [result] = await db.query('SELECT * FROM users WHERE user_id = ?', [user_id]);
        console.log(result);
        return result
    }
}
module.exports = UserService