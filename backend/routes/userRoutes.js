const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControls');

router.post('/signup', userCtrl.signup);  //  POST un nouvel utilisateur

router.post('/login', userCtrl.login);  //  POST une nouvelle connexion utilisateur

router.get('/infos/:id', userCtrl.infos);  //  GET infos utilisateur

router.delete('/delete/:id', userCtrl.deleteUser);  //  DELETE un compte utilisateur

module.exports = router;