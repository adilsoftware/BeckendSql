const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser')
const Post = require('./models/Post')

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
/////body Parser config//////////
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
///////////fim parser

//////////////////////////////rotas
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get ('/formulario', function(req, res){
    res.render('formulario');
});  

app.post ('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.send("Post criado com sucesso!")
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    })
});  


app.get ('/listar', function(req, res){
    Post.findAll().then(function(post){
        res.render('home', {post: post});
    })
    
});  




app.listen(8081, function(){
    console.log("Servidor rodando na porta http://localhost:8081/formulario");
});
