const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const helmet = require("helmet");
const users = require('./routes/users');
const config = require('./config/database');

mongoose.connect(config.database, {useMongoClient: true});

mongoose.connection.on('connected', () => {
  console.log("Connected to db " + config.database);
});

mongoose.connection.on('error', (err) => {
  console.error("Database error: " + err);
});

const app = express();
const port = 3000;
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());


app.listen(port, ()=> {
  console.info('listening on 3000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/users', users);
