const connection = require('../infra/database');
const Post = require('../../database/models/Post');

const getPosts = async () => {
    Post.init(connection);
    const posts = await Post.findAll();
    return posts;
};

const getPost = async (id) => {
    Post.init(connection);
    const post = await Post.findOne({
        where: {
            id: id
        }
    });
    return post;
};

const savePost = async (post) => {
    Post.init(connection);
    const new_post = await Post.create({ title: post.title, content: post.content });
    return new_post;
};

const deletePost = async (id) => {
    Post.init(connection);
    await Post.destroy({
        where: {
            id: id
        }
    });
};

const updatePost = async (id, { title, content }) => {
    Post.init(connection);
    await Post.update({
        title, content
    }, {
        where: {
            id: id
        }
    });
};

module.exports = {
    getPosts,
    getPost,
    savePost,
    deletePost,
    updatePost
};
