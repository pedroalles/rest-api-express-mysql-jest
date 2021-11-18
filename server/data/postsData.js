const connection = require('../infra/database');
const Post = require('../../database/models/Post');

Post.init(connection);

exports.getPosts = async () => {
    return Post.findAll();
};

exports.getPost = async (id) => {
    return Post.findOne({
        where: { id: id }
    });
};

exports.getPostByTitle = async (title) => {
    return Post.findOne({
        where: { title: title }
    });
};

exports.savePost = async ({ title, content }) => {
    return Post.create({
        title,
        content,
    });
};

exports.deletePost = async (id) => {
    await Post.destroy({
        where: { id: id }
    });
};

exports.updatePost = async (id, { title, content }) => {
    await Post.update({
        title,
        content
    }, {
        where: { id: id }
    });
};
