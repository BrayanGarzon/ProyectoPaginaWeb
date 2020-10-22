//controlador de rutas
const express = require('express');
const router = express.Router();
const fs = require ('fs');
const { resolve } = require('path');


//callbacks para manejar las peticiones al servidor
router.get('/', function(req,res){
    res.render('home')
});

//pagina 2 - consejos
router.get('/consejos', function(req,res){
    res.render('consejos')
});

//pagina 3 - informte y escribenos 
router.get('/Informate_Escribenos', function(req,res){
    res.render('Informate_Escribenos')
});

//pagina 4 - SobreNosotros 
router.get('/SobreNosotros', function(req,res){
    res.render('SobreNosotros')
});

//pagina 5 - Slogam 
router.get('/Slogam', function(req,res){
    res.render('Slogam')
});

//pagina 6 - AdquirirProducto 
router.get('/AdquirirProducto', function(req,res){
    res.render('AdquirirProducto')
});

//pagina 7 - calcular 
router.get('/calcular', function(req,res){
    res.render('Calcular')
});

//configurar callback para controlar ruta /calcula
router.post('/calcula', (req, res)=>{
    res.render('calcula', {
        base: req.body.id
    });
    console.log('la base es: '+ req.body.id );
    var base = req.body.id;

    let crearAarchivo = new Promise((resolve, reject)=>{
        var datos = '';
        for(let i=1; i<=10; i++){
            console.log(`${base}* ${i}=${base * i}`);
            datos += `${base}* ${i}=${base * i} \n`;
        }
        //implementar writeFile:
        fs.writeFile(`tabla ${base}.txt`, datos, (err)=>{
        if(err){
            reject(err);
        }else{
            resolve(`tabla ${base}.txt`)
        }
        console.log('archivo creado');
        });
    });
});

module.exports=router;