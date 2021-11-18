const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async (req, res) => {
    const posts = await postsService.getPosts();
    res.json(posts);
});

router.post('/posts', async ({ body }, res) => {
    const post = await postsService.savePost(body);
    res.status(201).json(post);
});

router.put('/posts/:id', async ({ body, params }, res) => {
    await postsService.updatePost(params.id, body);
    res.end();
});

router.delete('/posts/:id', async ({ params }, res) => {
    await postsService.deletePost(params.id);
    res.end();
});

module.exports = router;
