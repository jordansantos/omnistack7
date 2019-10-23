// yarn dev -> starta a aplicação com o nodemon
// mongodb+srv://omnistack:<omnistack>@omnistack7-mnyi4.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack7-mnyi4.mongodb.net/test?retryWrites=true&w=majority', {
  useUnifiedTopology: true, useNewUrlParser: true,
});

app.use(require('./routes'));
app.listen(3333);
