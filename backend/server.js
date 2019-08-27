const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require ('mongoose');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true} );
const connection = mongoose.connection;

connection.once ('open', function(){
    console.log("La connection à la base MOngoDB a été établi avec succés.");
});

app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
});
