const crypto = require('crypto');
const axios = require('axios');
const postsService = require('../../service/postsService');

const generate = () => crypto.randomBytes(20).toString('hex');

const request = (url, method, data) => axios({ url, method, data, validateStatus: false });

test('should get posts', async () => {
    const post1 = await postsService.savePost({ title: generate(), content: generate() });
    const post2 = await postsService.savePost({ title: generate(), content: generate() });
    const post3 = await postsService.savePost({ title: generate(), content: generate() });

    const response = await request('http://localhost:3000/posts', 'get');
    const posts = response.data;
    const status = response.status;

    expect(status).toBe(200);
    expect(posts).toHaveLength(3);

    await postsService.deletePost(post1.id);
    await postsService.deletePost(post2.id);
    await postsService.deletePost(post3.id);
});

test('should save a post', async () => {
    const data = { title: generate(), content: generate() };

    const response = await request('http://localhost:3000/posts', 'post', data);
    const post = response.data;
    const status = response.status;

    expect(status).toBe(201);
    expect(post.title).toBe(data.title);
    expect(post.content).toBe(data.content);

    await postsService.deletePost(post.id);
});

test('should update a post', async () => {
    const post = await postsService.savePost({ title: generate(), content: generate() });

    post.title = generate();
    post.content = generate();

    const response = await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
    const status = response.status;
    const updatedPost = await postsService.getPost(post.id);

    expect(status).toBe(204);
    expect(updatedPost.title).toBe(post.title);
    expect(updatedPost.content).toBe(post.content);

    await postsService.deletePost(post.id);
});

test('should not update a post', async () => {
    const post = { id: 1 };

    const response = await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
    const status = response.status;

    expect(status).toBe(404);
});

test('should delete a post', async () => {
    const post = await postsService.savePost({ title: generate(), content: generate() });

    const response = await request(`http://localhost:3000/posts/${post.id}`, 'delete');
    const status = response.status;
    const posts = await postsService.getPosts();

    expect(status).toBe(204);
    expect(posts).toHaveLength(0);
});
