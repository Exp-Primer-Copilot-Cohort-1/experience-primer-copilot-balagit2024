// Create web server, and listen on port 3000
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = {};
app.get('/posts/:id/comments', (req, res) => {
    res.send(comments[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const id = Math.random().toString(36).substring(2);
    const { content } = req.body;

    if (!comments[req.params.id]) {
        comments[req.params.id] = [];
    }

    comments[req.params.id].push({ id, content });
    res.status(201).send(comments[req.params.id]);
});

app.listen(3001, () => {
    console.log('Listening on 3001');
});
