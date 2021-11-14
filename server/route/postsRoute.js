const express = require('express');
const router = express.Router();

router.get('/posts', async (req, res) => {
    res.json([{
        id: 1,
        title: 'REST API: Métodos',
        content: '...',
        date: new Date()
    }]);
});

module.exports = router;
