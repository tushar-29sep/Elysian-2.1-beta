const express = require('express');

const app = express();
const port = 8080;

app.use(express.static('../frontend'));

app.get('/', (req, res) => {
    res.sendFile('../frontend/index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
