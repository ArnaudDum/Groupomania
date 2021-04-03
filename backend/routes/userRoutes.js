const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControls');
const auth = require('../middleware/auth.js');

router.post('/signup', userCtrl.signup);  //  POST un nouvel utilisateur

router.post('/login', userCtrl.login);  //  POST une nouvelle connexion utilisateur

router.get('/infos/:id', userCtrl.infos);  //  GET infos utilisateur

router.put('/infos/:id', auth, userCtrl.updateUser);  // UPDATE infos utilisateur

router.delete('/delete/:id', auth, userCtrl.deleteUser);  //  DELETE un compte utilisateur

module.exports = router;