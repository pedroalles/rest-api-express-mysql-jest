const postsData = require('../data/postsData');

exports.getPosts = async () => {
    return postsData.getPosts();
};

exports.getPost = async (id) => {
    return postsData.getPost(id);
};

exports.savePost = async (post) => {
    return postsData.savePost(post);
};

exports.deletePost = async (id) => {
    return postsData.deletePost(id);
};

exports.updatePost = async (id, post) => {
    return postsData.updatePost(id, post);
};
