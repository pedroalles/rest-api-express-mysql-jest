const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async (req, res, next) => {
    try {
        const posts = await postsService.getPosts();
        res.json(posts);
    } catch (e) {
        next(e);
    }
});

router.post('/posts', async ({ body }, res, next) => {
    try {
        const post = await postsService.savePost(body);
        res.status(201).json(post);
    } catch (e) {
        next(e);
    }
});

router.put('/posts/:id', async ({ body, params }, res, next) => {
    try {
        await postsService.updatePost(params.id, body);
        res.status(204).end();
    } catch (e) {
        next(e);
    }
});

router.delete('/posts/:id', async ({ params }, res, next) => {
    try {
        await postsService.deletePost(params.id);
        res.status(204).end();
    } catch (e) {
        next(e);
    }

});

module.exports = router;
