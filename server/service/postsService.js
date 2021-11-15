const postsData = require('../data/postsData');

const getPosts = async () => {
    return postsData.getPosts();
};

module.exports = {
    getPosts,
};
