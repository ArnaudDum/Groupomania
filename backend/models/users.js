exports.loginRequest = 'SELECT * FROM users WHERE email=?';

exports.infoRequest = 'SELECT * FROM users WHERE id=?';

exports.deleteUserRequest = 'DELETE FROM users WHERE id=?';

exports.signup = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

exports.update = 'UPDATE users SET name=?, email=?, password=? WHERE id=?';