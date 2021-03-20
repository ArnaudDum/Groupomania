exports.getPosts = (req, res, next) => {
    connection.query(
        'SELECT * FROM posts',
        (err, result) => {
            if(!err) {
                res.status(200).json({ message: 'Accès aux publications' })
                res.send(result);
            } else {
                res.status(400).json({ error });
            }
        })
};

exports.getOnePost = (req, res, next) => {
    
};

exports.createPost = (req, res, next) => {
    
};

exports.comment = (req, res, next) => {

};

exports.deleteOnePost = (req, res, next) => {

};

exports.deleteOneComment = (req, res, next) => {

};

exports.modifyPost = (req, res, next) => {

};

exports.modifyComment = (req, res, next) => {

};