const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authorize = req.headers.authorization;
    try {
        const token = authorize.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM');
        const userId = decodedToken.userId;
        console.log(req.params.userId);
        if(req.params.userId && req.params.userId != userId) {
            throw 'Identifiant utilisateur non valable';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({error: error | 'Requête non authentifiée !'});
    }
};