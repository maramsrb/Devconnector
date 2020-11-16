const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

const users = require('./routes/api/users');

//Body parser config
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//DB config
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
//First route
app.get('/', (req, res) => res.send("NEE NEW HI"));
app.use('/api/users', users);

const port = 9000;
app.listen(port, () => console.log(`Server running on port ${port}`));

