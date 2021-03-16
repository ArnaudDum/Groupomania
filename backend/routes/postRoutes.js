const express = require('express');
const router = express.Router();
const postControls = require('../controllers/postControls');
const auth = require('../middleware/auth');


router.get('/', auth, postControls.getPosts);  // GET toutes les publications

router.get('/:id', auth, postControls.getOnePost);  // GET une publication + accès à tous les commentaires de la publication ciblée

router.post('/', auth, postControls.createPost);  // POST une publication

router.put('/:id', auth, postControls.modifyPost);  // PUT une publication de l'utilisateur

router.put('/:id/comment/:id', auth, postControls.modifyComment);  // PUT un commentaire de l'utilisateur

router.delete('/:id', auth, postControls.deleteOnePost);  // DELETE une publication de l'utilisateur

router.post('/:id/comment', auth, postControls.comment);  //  POST un commentaire sur une publication

router.delete('/:id/comment/:id', auth, postControls.deleteOneComment);  // DELETE un commentaire de l'utilisateur

module.exports = router;