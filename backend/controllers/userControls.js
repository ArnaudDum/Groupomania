const mysql = require('mysql');
const db = require('../database/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }
            let request = 'INSERT INTO users (name, email, password) VALUES ("' + user.name + '", "' + user.email + '", "' + user.password + '")';
            db.query(request, (err, result) => {
                res.status(201).json({message: 'Nouvel utilisateur enregistré'});
            })
        })
        .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) => {
    db.query('SELECT * FROM users WHERE email=?', [req.body.email], (err, result) => {
        if (!result) {
            return res.status(400).json({message: 'Utilisateur non trouvé'})
        }
        bcrypt.compare(req.body.password, result[0].password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({message: 'Mot de passe in correct'})
                }
                res.send({
                    user: result[0].name,
                    userId: result[0].id,
                    token: jwt.sign(
                        {userId: result[0].id},
                        'RANDOM',
                        {expiresIn: '24h'}
                    )
                })
            })
    })
};

exports.infos = (req, res, next) => {
    db.query('SELECT * FROM users WHERE id=?', [req.params.id], (err, result) => {
        res.status(200).send(result);
    })
};

exports.deleteUser = (req, res, next) => {
    db.query('DELETE FROM users WHERE id=?', [req.params.id], (err, result) => {
        res.status(201).json({message: 'Utilisateur supprimé'})
    })
};