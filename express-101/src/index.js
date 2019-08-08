const express = require('express');

const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hey, I am server response'));
app.get('/movie/:title', (req, res) => {
    const movie = req.params.title;
    res.send(` My favorite movie is ${movie}`);
});
app.listen(port, () => console.log(`Server listening on port: ${port}`));
module.exports = app;
