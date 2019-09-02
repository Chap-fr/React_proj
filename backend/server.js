const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require ('mongoose');
const todoRoutes = express.Router();
let Todo = require('./todo.model')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once ('open', function(){
    console.log("La connection à la base MOngoDB a été établi avec succés.");
});

todoRoutes.route('/').get(function(req, res){
    Todo.find(function(err, todos) {
        if(err){
            console.log(err);
        }else{
            res.json(todos) 
        }
    })
})

todoRoutes.route('/:id').get(function(req, res){
    let id = req.params.id
    Todo.findById(id, function(err, todo){
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res){
    let todo = new Todo(req.body);
    todo.save()
        .then(todo =>{
            res.status(200).json({'todo': 'todo a été ajouté avec succés'});
        })
        .catch(err =>{
            res.status(400).send('Ajouter un nouveau todo à échoué');
        });
});

todoRoutes.route('/update/:id').post(function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        if (!todo){
            res.status(404).send('data is not found');
        }else {
            todo.todo_descritpion = req.body.todo_descritpion;
            todo.todo_responsible = req.todo_responsible;
            todo.todo_priority = req.todo_priority;
            todo.todo_completed = req.todo_completed;

            todo.save().then(todo => {
                res.json('Todo mis à jour');
            })
            .catch(err => {
                res.status(400).send("Mise à jour impossible")
            })
        }
    })
})


app.use('/todos', todoRoutes);




app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
});
