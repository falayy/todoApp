const express = require('express');
const bodyParser = require('body-parser');
const {Todo} = require('./model/todos');
const{User} = require('./model/users');
const {mongoose} = require('./db/mongoose');



const app = express();
app.use(bodyParser.urlencoded({extended : false }))
app.use(bodyParser.json());


app.get('/' , (req, res) =>{
    res.send("welcome to the express todo app");
}, (err) =>{
    console.log("error dey daddy", err);
})

app.post('/todos', (req, res) =>{
    console.log(req.body.text)
    const todo = new Todo({
        text : req.body.text
    });
    todo.save().then((docs) =>{
        res.send(docs);
    })
    .catch((err) =>{
        res.status(400).send(err);
    });
});

app.post('users', (req, res) =>{
    const user = new User({
        email : req.body.text
    });
    user.save().then((doc) =>{
        res.send(doc);
    }, (err) =>{
        res.status(400).send(err);
    });
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
}); 