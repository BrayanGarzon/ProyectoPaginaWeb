const { rejects } = require("assert");
const { resolve } = require("path");

//crear promesa
let hola = new Promise((resolve, reject)=> {
    //funcion asincrona, que se ejecuto en otro momento
    setTimeout(() => {
        let saludo = 'Hola mundo'; //saludo = true

        //saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('Error, No saludo');
        }
        
    },2000);
});        //una promesa es un objeto 


hola.then(resolve => {
    console.log(resolve);
})
.catch(error =>{
    console.log(error);
});











