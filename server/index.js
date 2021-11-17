const express = require('express');
const postsRoute = require('./route/postsRoute');

const app = express();

app.use(express.json());
app.use('/', postsRoute);

app.listen(3000);
