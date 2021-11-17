const connection = require('../infra/database');
const Post = require('../../database/models/Post');

const getPosts = async () => {
    Post.init(connection);
    const posts = await Post.findAll();
    return posts;
};

const savePost = async (post) => {
    Post.init(connection);
    const new_post = await Post.create({ title: post.title, content: post.content });
    return new_post;
};

module.exports = {
    getPosts,
    savePost
};
