const express = require('express');
const app = express();
const hbs = require('hbs');
const router = express.Router();
//importar rutas
const indexRoutes = require('./routes/index')

//middleware
app.use(express.static(__dirname + '/public')); //con esta line hablamos de cuando un usuario escribe en google y saldra la url de la pagina
app.use(express.urlencoded({extended: false}));//el servidor entiende los datos que vienen de un formulario html solo texto no imagenes


//implementar hbs
app.set('view engine','hbs');

//cada vez que se reviba una peticion usar las rutas de indexRoutes
app.use('/',indexRoutes);

app.listen(3000,() => {
    console.log('Datos guardados -- servidor corriendo');
});