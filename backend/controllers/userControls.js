const mysql = require('mysql');
const db = require('../database/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                id: null,
                name: req.body.name,
                email: req.body.email,
                password: hash
            };
            db.query('INSERT INTO users VALUES ?', user, (err, result) => {
                res.status(201).json({message: 'Nouvel utilisateur enregistré'});
            })
                .then(
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},
                            'RANDOM',
                            {expiresIn: '24h'}
                        )
                    })
                )
        })
        .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) => {

};

exports.deleteUser = (req, res, next) => {

};