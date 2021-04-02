const express = require('express');
const router = express.Router();
const postControls = require('../controllers/postControls');
const auth = require('../middleware/auth.js');

router.get('/', postControls.getPosts);  // GET toutes les publications

router.get('/:id', postControls.getOnePost);  // GET une publication

router.get('/:id/comments', postControls.getAllComments);  // GET tous les commentaires d'une publication

router.post('/', postControls.createPost);  // POST une publication

router.delete('/:id', postControls.deleteOnePost);  // DELETE une publication de l'utilisateur

router.post('/comment', postControls.comment);  //  POST un commentaire sur une publication

router.delete('/comment/:id', postControls.deleteOneComment);  // DELETE un commentaire de l'utilisateur

module.exports = router;