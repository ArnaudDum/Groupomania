const mysql = require('mysql');
const db = require('../database/db.js');

exports.getPosts = (req, res, next) => {
    db.query('SELECT * FROM posts ORDER BY post_date ASC', (error, result) => {
        res.status(200).send(result);
    })
};

exports.getOnePost = (req, res, next) => {
    db.query('SELECT * FROM posts WHERE id=?', [req.params.id], (error, result) => {
        res.status(200).send(result);
    })
};

exports.getAllComments = (req, res, next) => {
    db.query('SELECT * FROM comments WHERE id_post=? ORDER BY comment_date DESC', [req.params.id], (error, result) => {
        res.status(200).send(result);
    })
};

exports.createPost = (req, res, next) => {
    let request = 'INSERT INTO posts (id_user, name, post_title, post_text) VALUES ("' + req.body.userId + '", "' + req.body.name + '", "' + req.body.title + '", "' + req.body.text + '")';
    db.query(request, (error, result) => {
        res.status(201).json({ message: 'ARTICLE PUBLIÉ !' });
    })
};

exports.comment = (req, res, next) => {
    let request = 'INSERT INTO comments (id_post, id_user, name, comment_text) VALUES ("'+req.body.postId+'", "'+req.body.userId+'", "'+req.body.name+'", "'+req.body.text+'")';
    db.query(request, (error, result) => {
        res.status(201).json({ message: 'COMMENTAIRE PUBLIÉ !' });
    })
};

exports.deleteOnePost = (req, res, next) => {
    db.query('DELETE FROM posts WHERE id=?', [req.params.id], (err, result) => {
        res.status(200).json({ message: 'PUBLICATION SUPPRIMÉE !' });
    });
};

exports.deleteOneComment = (req, res, next) => {
    db.query('DELETE FROM comments WHERE id=?', [req.params.id], (err, result) => {
        res.status(200).json({ message: 'COMMENTAIRE SUPPRIMÉ !' });
    })
};