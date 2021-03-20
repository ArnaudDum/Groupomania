const express = require('express');
const router = express.Router();
const postControls = require('../controllers/postControls');

router.get('/', postControls.getPosts);  // GET toutes les publications

router.get('/:id', postControls.getOnePost);  // GET une publication + accès à tous les commentaires de la publication ciblée

router.post('/', postControls.createPost);  // POST une publication

router.put('/:id', postControls.modifyPost);  // PUT une publication de l'utilisateur

router.put('/:id/comment/:id', postControls.modifyComment);  // PUT un commentaire de l'utilisateur

router.delete('/:id', postControls.deleteOnePost);  // DELETE une publication de l'utilisateur

router.post('/:id/comment', postControls.comment);  //  POST un commentaire sur une publication

router.delete('/:id/comment/:id', postControls.deleteOneComment);  // DELETE un commentaire de l'utilisateur

module.exports = router;