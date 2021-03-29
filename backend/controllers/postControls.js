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
    db.query('INSERT INTO posts VALUES (?)', [...req.body], (error, result) => {
        res.status(201).json({ message: 'Article publié !' });
    })
};

exports.comment = (req, res, next) => {
    db.query('INSERT INTO comments SET ?', [...req.body], (error, result) => {
        res.status(201).json({ message: 'Commentaire publié !' });
    })
};

exports.deleteOnePost = (req, res, next) => {
    db.query('DELETE FROM posts WHERE id=?', [req.params.id], (error, result) => {
        res.status(200).json({ message: 'Publication supprimée' });
    })
};

exports.deleteOneComment = (req, res, next) => {
    db.query('DELETE FROM comments WHERE id=?', [req.params.id], (error, result) => {
        res.status(200).json({ message: 'Commentaire supprimé' });
    })
};

exports.modifyPost = (req, res, next) => {

};

exports.modifyComment = (req, res, next) => {

};