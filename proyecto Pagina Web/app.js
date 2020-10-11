const readline = require('readline');

let datos='';

    let interfazCaptura = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    interfazCaptura.question('\nIngrese el numero que desea: ', function(respuesta){
        for (let i=1; i<=10; i++){
        console.log(`${respuesta}*${i}=${respuesta*i}`);
        datos += `${respuesta}*${i}=${respuesta*i}\n`;
    }
/*
    //impletmentar fs.writefile
    fs.writeFile('archivo.txt',datos, (err)=>{
        if(err) throw err;
        
        console.log('\nEl archivo se genero bien');
    });
*/
    interfazCaptura.close();
});






/*const fs = require('fs');

base='2';
let datos = '';


for (let i=1; i<=10; i++){
    console.log(`${base}*${i}=${base*i}`);
    datos += `${base}*${i}=${base*i}\n`;
}


//impletmentar fs.writefile
fs.writeFile('archivo.txt',datos, (err)=>{
    if(err) throw err;
    
    console.log('\nEl archivo se genero bien');
});*/

