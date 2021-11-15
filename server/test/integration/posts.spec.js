const crypto = require('crypto');
const axios = require('axios');

const generate = () => {
    return crypto.randomBytes(20).toString('hex');
};

test('should get posts', async () => {
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    });
    const posts = response.data;
    const [firstPost] = posts;
    expect(posts).toHaveLength(3);
    expect(firstPost.id).toBe(1);
    expect(firstPost.title).toBe('REST API: Métodos');
});
