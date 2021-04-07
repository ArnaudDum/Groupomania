exports.allPostsRequest = 'SELECT * FROM posts ORDER BY post_date ASC';

exports.onePostRequest = 'SELECT * FROM posts WHERE id=?';

exports.allCommentsRequest = 'SELECT * FROM comments WHERE id_post=? ORDER BY comment_date DESC';

exports.deletePostRequest = 'DELETE FROM posts WHERE id=?';

exports.deleteCommentRequest = 'DELETE FROM comments WHERE id=?';