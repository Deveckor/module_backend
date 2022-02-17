const fs = require('fs');
const content = `Esto es el contenido agregado desde Nodejs`
fs.writeFile('./nuevaCarpeta/archivoNuevo.txt',content,'utf-8',(err)=>{
    if (err) {
        console.log('No se pudo crear el archivo');
        return
    }
    console.log('Se creo el archivo correctamente');
})