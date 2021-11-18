const postsData = require('../data/postsData');

const getPosts = async () => {
    return postsData.getPosts();
};

const getPost = async (id) => {
    return postsData.getPost(id);
};

const savePost = async (post) => {
    return postsData.savePost(post);
};

const deletePost = async (id) => {
    return postsData.deletePost(id);
};

const updatePost = async (id, post) => {
    return postsData.updatePost(id, post);
};

module.exports = {
    getPosts,
    getPost,
    savePost,
    deletePost,
    updatePost
};
