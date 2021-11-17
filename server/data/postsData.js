const connection = require('../infra/database');
const Post = require('../../database/models/Post');

const getPosts = async () => {
    Post.init(connection);
    const posts = await Post.findAll();
    return posts;
};

module.exports = {
    getPosts,
};
