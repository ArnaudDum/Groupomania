const db = require('../database/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRequest = require('../models/users.js');
require('dotenv').config();

exports.signup = (req, res, next) => {
    db.query(userRequest.loginRequest, [req.body.email], (error, result) => {
        if (!result) {
            bcrypt.hash(req.body.password, 10)
                .then(hash => {
                    db.query(userRequest.signup, [req.body.name, req.body.email, hash], (error, result) => {
                        res.status(201).json({message: 'Nouvel utilisateur enregistré'});
                        if(error) {
                            res.status(400).send(error);
                        }
                    })
                })
                .catch(error => res.status(500).json({ error }))
        } else {
            return res.status(400).json({message: 'Un utilisateur est déjà enregistré avec cette adresse email'})
        }
    })
};

exports.login = (req, res, next) => {
    db.query(userRequest.loginRequest, [req.body.email], (error, result) => {
        if (!result) {
            return res.status(400).json({message: 'Utilisateur non trouvé'})
        }
        bcrypt.compare(req.body.password, result[0].password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({message: 'Mot de passe incorrect'})
                }
                res.send({
                    user: result[0].name,
                    userId: result[0].id,
                    token: jwt.sign(
                        {userId: result[0].id},
                        process.env.SECRETKEY,
                        {expiresIn: '24h'}
                    )
                })
            })
    })
};

exports.infos = (req, res, next) => {
    db.query(userRequest.infoRequest, [req.params.id], (error, result) => {
        res.status(200).send(result);
        if(error) {
            res.status(400).send(error);
        }
    })
};

exports.deleteUser = (req, res, next) => {
    db.query(userRequest.deleteUserRequest, [req.params.id], (error, result) => {
        res.status(201).json({message: 'Utilisateur supprimé'})
        if(error) {
            res.status(400).send(error);
        }
    })
};

exports.updateUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            db.query(userRequest.update, [req.body.name, req.body.email, hash, req.params.id], (error, result) => {
                res.status(201).json({message: 'Utilisateur supprimé'})
                if(error) {
                    res.status(400).send(error);
                }
            })
        })
};