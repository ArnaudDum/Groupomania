exports.getPosts = (req, res, next) => {
    Posts.find()
      .then(posts => res.status(200).json(posts))
      .catch(error => res.status(404).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Posts.findOne({ _id: req.params.id })
      .then(post => res.status(200).json(post))
      .catch(error => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {
    
};

exports.comment = (req, res, next) => {

};

exports.deleteOnePost = (req, res, next) => {
    Posts.findOne({ _id: req.params.id })
        .then(() => {
            Posts.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Article supprimé !' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(400).json({ error }))
};

exports.deleteOneComment = (req, res, next) => {
    Comments.findOne({ _id: req.params.id })
        .then(() => {
            Comments.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Commentaire supprimé !' }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(400).json({ error }))
};

exports.modifyPost = (req, res, next) => {
    Posts.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Article modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.modifyComment = (req, res, next) => {
    Comments.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Commentaire modifiée !'}))
      .catch(error => res.status(400).json({ error }));
};