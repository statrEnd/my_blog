const db = require('../../config/db.config.js');
const UserService = {
    login: async({ username, password }) => {
        const [result] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
        return result
    }
}
module.exports = UserService