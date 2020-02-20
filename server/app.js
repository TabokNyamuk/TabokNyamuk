const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/user');
const http = require('http').createServer(app);
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', router);

http.listen(port, () => console.log(`Listening on port ${port}!`));
