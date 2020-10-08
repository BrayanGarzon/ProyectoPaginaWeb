const fs = require('fs');
const { resolve } = require('path');

//implemetar promesa

let crearArchivo = (base) => {
    return new Promise((resolve,reject) =>{
        if(!Number(base)){
            reject(`El valor recibido ${base} no es un numero`);
            return;
        }

        let datos = '';
        for(let i = 1; i <=10; i++){
            console.log(`${base} * ${i} = ${base * i}`)
            datos += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile('files/message.txt', datos, (err) =>{
            if (err){
                reject (err);
            }else{
                resolve('files/message.txt')
            }
            
            console.log('El archivo ha sido generado');
        });
    });
}

//exportar para utilizar en otros archivos del proyecto
module.exports = {crearArchivo}


