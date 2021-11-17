const postsData = require('../data/postsData');

const getPosts = async () => {
    return postsData.getPosts();
};

const savePost = async (post) => {
    return postsData.savePost(post);
};

const deletePost = async (id) => {
    return postsData.deletePost(id);
};

module.exports = {
    getPosts,
    savePost,
    deletePost
};
