const postsData = require('../data/postsData');

const getPosts = async () => {
    return postsData.getPosts();
};

const savePost = async (post) => {
    return postsData.savePost(post);
};

module.exports = {
    getPosts,
    savePost
};
