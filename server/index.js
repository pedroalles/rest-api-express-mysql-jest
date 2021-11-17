const express = require('express');
const postsRoute = require('./route/postsRoute');

const app = express();

app.use('/', postsRoute);

app.listen(3000);
