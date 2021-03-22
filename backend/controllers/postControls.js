const mysql = require('mysql');
const db = require('../database/db.js');

exports.getPosts = (req, res, next) => {
        db.query('SELECT * FROM posts', (error, result) => {
            res.status(200).send(result);
            if (error) throw error ;
            })
};

exports.getOnePost = (req, res, next) => {
        db.query('SELECT * FROM posts WHERE id=?', [req.params.id], (error, result) => {
            res.status(200).send(result);
            if (error) throw error ;
            })
};

exports.createPost = (req, res, next) => {
    db.query('INSERT INTO posts SET ?', [...req.body], (error, result) => {
        res.status(200).json({ message: 'Article publié !' });
        if (error) throw error;
    })
};

exports.comment = (req, res, next) => {
    db.query('INSERT INTO comments SET ?', [...req.body], (error, result) => {
        res.status(200).json({ message: 'Commentaire publié !' });
        if (error) throw error;
    })
};

exports.deleteOnePost = (req, res, next) => {
        db.query('DELETE FROM posts WHERE id=?', [req.params.id], (error, result) => {
            res.status(200).json({ message: 'Publication supprimée' });
            if (error) throw error ;
            })
};

exports.deleteOneComment = (req, res, next) => {
        db.query('DELETE FROM comments WHERE id=?', [req.params.id], (error, result) => {
            res.status(200).json({ message: 'Commentaire supprimé' });
            if (error) throw error ;
            })
};

exports.modifyPost = (req, res, next) => {

};

exports.modifyComment = (req, res, next) => {

};