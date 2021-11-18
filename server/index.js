const express = require('express');
const postsRoute = require('./route/postsRoute');

const errorHandler = (error, req, res, next) => {
    if (error.message === 'Post not found') {
        return res.status(404).send(error.message);
    }
    if (error.message === 'Post already exists') {
        return res.status(409).send(error.message);
    }
    return res.status(500).send(error.message);
};

const app = express();

app.use(express.json());
app.use('/', postsRoute);
app.use(errorHandler);

app.listen(3000);
