const mysql = require('mysql');
const db = require('../database/db.js');
const postRequest = require('../models/posts.js');

exports.getPosts = (req, res, next) => {
    db.query(postRequest.allPostsRequest, (error, result) => {
        res.status(200).send(result);
        if(error) {
            res.status(400).send(error);
        }
    })
};

exports.getOnePost = (req, res, next) => {
    db.query(postRequest.onePostRequest, [req.params.id], (error, result) => {
        res.status(200).send(result);
        if(error) {
            res.status(400).send(error);
        }
    })
};

exports.getAllComments = (req, res, next) => {
    db.query(postRequest.allCommentsRequest, [req.params.id], (error, result) => {
        res.status(200).send(result);
        if(error) {
            res.status(400).send(error);
        }
    })
};

exports.createPost = (req, res, next) => {
    let request = 'INSERT INTO posts (id_user, name, post_title, post_text) VALUES ("' + req.body.userId + '", "' + req.body.name + '", "' + req.body.title + '", "' + req.body.text + '")';
    db.query(request, (error, result) => {
        res.status(201).json({ message: 'ARTICLE PUBLIÉ !' });
        if(error) {
            res.status(400).json({ message: "Echec de l'envoi de l'article"});
        }
    })
};

exports.comment = (req, res, next) => {
    let request = 'INSERT INTO comments (id_post, id_user, name, comment_text) VALUES ("'+req.body.postId+'", "'+req.body.userId+'", "'+req.body.name+'", "'+req.body.text+'")';
    db.query(request, (error, result) => {
        res.status(201).json({ message: 'COMMENTAIRE PUBLIÉ !' });
        if(error) {
            res.status(400).json({ message: "Echec de l'envoi du commentaire"});
        }
    })
};

exports.deleteOnePost = (req, res, next) => {
    db.query(postRequest.deletePostRequest, [req.params.id], (error, result) => {
        res.status(200).json({ message: 'PUBLICATION SUPPRIMÉE !' });
        if(error) {
            res.status(400).send(error);
        }
    });
};

exports.deleteOneComment = (req, res, next) => {
    db.query(postRequest.deleteCommentRequest, [req.params.id], (error, result) => {
        res.status(200).json({ message: 'COMMENTAIRE SUPPRIMÉ !' });
        if(error) {
            res.status(400).send(error);
        }
    })
};