require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.connect('mongodb://admin:admin@ds047581.mlab.com:47581/bucket-list-ben-cook');

app.use(cors());
app.use(bodyParser.json({type: '*/*'}))
router(app);

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
console.log('Server is listening on ' + port);