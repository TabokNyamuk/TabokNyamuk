const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const router = require('./routes/user');

app.use(cors());
app.use('/user', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
