const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async (req, res) => {
    const posts = await postsService.getPosts();
    res.json(posts);
});

router.post('/posts', async ({ body }, res) => {
    try {
        const post = await postsService.savePost(body);
        res.status(201).json(post);
    } catch (e) {
        if (e.message === 'Post already exists') {
            res.status(409).send(e.message);
        } else {
            res.status(500).send(e.message);
        }
    }
});

router.put('/posts/:id', async ({ body, params }, res) => {
    try {
        await postsService.updatePost(params.id, body);
        res.status(204).end();
    } catch (e) {
        if (e.message === 'Post not found') {
            res.status(404).send(e.message);
        } else {
            res.status(500).send(e.message);
        }
    }
});

router.delete('/posts/:id', async ({ params }, res) => {
    await postsService.deletePost(params.id);
    res.status(204).end();
});

module.exports = router;
