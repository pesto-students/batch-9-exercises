const express = require('express');

const app = express();
const port = 3000;
const indexRoutes = require('./routes/indexRoutes');

app.use('/', indexRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
