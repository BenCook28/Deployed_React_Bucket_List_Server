const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const router = require('./router');

app.use(bodyParser.json({type: '*/*'}))
router(app);

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
console.log('Server is listening on ' + port);