var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Desarrollo Laboratorio 4</h1>')
}

function c_clientes(req,res){
    res.send('<h1>Cliente 1</h1><br><h1>Cliente 2</h1><br><h1>Cliente 3</h1>')
}

function c_productos(req,res){
    res.send('<h1>Producto 1</h1><br><h1>Producto 2</h1><br><h1>Producto 3</h1>')
}

function c_server(req,res){
    console.log('port:8000');
}

var server = app.listen(8000,c_server);