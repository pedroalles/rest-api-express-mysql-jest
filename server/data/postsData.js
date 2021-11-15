const { db } = require('../infra/database');

const getPosts = () => {
    return new Promise((resolve, reject) => {
        const query_ = 'select * from blog.post';
        db.query(query_, (err, result, fields) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    });
};

module.exports = {
    getPosts,
};
