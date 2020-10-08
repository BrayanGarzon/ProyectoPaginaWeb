

//importar
let base= 2;
const {crearArchivo} = require ('./multiplicar/multiplicar')

//invocar la funcion de la promesa e implementar

crearArchivo(base).then(archivo => console.log(`archivo creado ${archivo}`))
.catch(err => console.log(err));






