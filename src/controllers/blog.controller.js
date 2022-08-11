const db = require('../utils/database'); 
const catchAsync = require('../utils/catchAsync');
//블로그 홈
const Home = (req, res) => {
    res.redirect('/posts');     
}
//블로그 리스트업
const blogList = catchAsync(async (req, res) => {
    const query = `
        SELECT posts.*, authors.name AS author_name FROM posts 
        INNER JOIN authors ON posts.author_id = authors.id
    `;
    const [posts] = await db.query(query);
    res.render('posts-list', { posts: posts });
});
//블로그 
const blogCreate = catchAsync(async (req, res) => {
    const [authors] = await db.query('SELECT * FROM authors')
    res.render('create-post', { authors: authors })
});

const blogInsert = async (req, res) => {
    const data = [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.body.author,
    ]
    await db.query('INSERT INTO posts (title,summary,body,author_id) values (?)', [data])
    res.redirect('/posts');
}

const blogDetail = async (req, res) => {
    const query = `
        SELECT posts.*, authors.name AS author_name , authors.email AS authors_email
        FROM posts 
        INNER JOIN authors ON posts.author_id = authors.id
        WHERE posts.id=?
    `;
    const [posts] = await db.query(query, [req.params.id]);
    if (!posts || posts.length === 0) {
        return res.status(404).render('404');
    }
    const postData = {
        ...posts[0],
        date: posts[0].date.toISOString(),
        readableDate: posts[0].date.toLocaleDateString('ko-KR'),
    }
    res.render('post-detail', { post: postData });
}
const blogEdit = async (req, res) => {
    const query = `
        SELECT posts.*, authors.name AS author_name , authors.email AS authors_email
        FROM posts 
        INNER JOIN authors ON posts.author_id = authors.id
        WHERE posts.id=?
    `;
    const [posts] = await db.query(query, [req.params.id]);
    if (!posts || posts.length === 0) {
        return res.status(404).render('404');
    }
    res.render('update-post', { post: posts[0] });
}
const blogUpdate = async (req, res) => {
    const query = `
        UPDATE posts SET title = ?,summary=?,body = ?
        WHERE id=?
    `;
    await db.query(query, [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.params.id,])
    res.redirect('/posts');
}
const blogDelete = async (req, res) => {
    const query = `
        DELETE FROM posts WHERE id=?
    `;

    await db.query(query, [req.params.id,])
    res.redirect('/posts');
}
module.exports={
    Home,
    blogList,
    blogCreate,
    blogInsert,
    blogDetail,
    blogEdit,
    blogUpdate,
    blogDelete,
}