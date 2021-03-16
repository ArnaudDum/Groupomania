const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControls');

router.post('/signup', userCtrl.signup);  //  POST un nouvel utilisateur

router.post('/login', userCtrl.login);  //  POST une nouvelle connexion utilisateur

router.delete('/delete', userCtrl.deleteUser);  //  DELETE un compte utilisateur

module.exports = router;