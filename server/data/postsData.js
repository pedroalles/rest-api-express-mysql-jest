const connection = require('../infra/database');
const Post = require('../../database/models/Post');

exports.getPosts = async () => {
    Post.init(connection);
    const posts = await Post.findAll();
    return posts;
};

exports.getPost = async (id) => {
    Post.init(connection);
    const post = await Post.findOne({
        where: {
            id: id
        }
    });
    return post;
};

exports.savePost = async (post) => {
    Post.init(connection);
    const new_post = await Post.create({ title: post.title, content: post.content });
    return new_post;
};

exports.deletePost = async (id) => {
    Post.init(connection);
    await Post.destroy({
        where: {
            id: id
        }
    });
};

exports.updatePost = async (id, { title, content }) => {
    Post.init(connection);
    await Post.update({
        title, content
    }, {
        where: {
            id: id
        }
    });
};
