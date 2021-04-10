exports.allPostsRequest = 'SELECT * FROM posts ORDER BY post_date DESC';

exports.onePostRequest = 'SELECT * FROM posts WHERE id=?';

exports.allCommentsRequest = 'SELECT * FROM comments WHERE id_post=? ORDER BY comment_date DESC';

exports.deletePostRequest = 'DELETE FROM posts WHERE id=?';

exports.deleteCommentRequest = 'DELETE FROM comments WHERE id=?';

exports.createPost = 'INSERT INTO posts (id_user, name, post_title, post_text) VALUES (?, ?, ?, ?)';

exports.createComment = 'INSERT INTO comments (id_post, id_user, name, comment_text) VALUES (?, ?, ?, ?)';
