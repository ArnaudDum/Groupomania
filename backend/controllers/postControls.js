const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'groupomania'
});


exports.getPosts = (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log('Connected to DB');
        connection.query('SELECT * FROM posts', (error, result) => {
            connection.release()
            res.send(result);
            if(error) throw error ;
            })
})};

exports.getOnePost = (req, res, next) => {
    
};

exports.createPost = (req, res, next) => {
    
};

exports.comment = (req, res, next) => {

};

exports.deleteOnePost = (req, res, next) => {

};

exports.deleteOneComment = (req, res, next) => {

};

exports.modifyPost = (req, res, next) => {

};

exports.modifyComment = (req, res, next) => {

};