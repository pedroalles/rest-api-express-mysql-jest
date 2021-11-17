const express = require('express');
const router = express.Router();
const postsService = require('../service/postsService');

router.get('/posts', async (req, res) => {
    const posts = await postsService.getPosts();
    res.json(posts);
});

router.post('/posts', async (req, res) => {
    const post = req.body;
    const new_post = await postsService.savePost(post);
    res.json(new_post);
});

module.exports = router;
