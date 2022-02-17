const fs = require('fs');

const content = '\nAgregando contenido al archivo'

fs.appendFile('new-file.txt',content,'utf-8',(err)=>{
    if (err) {
        console.log('No se pudo agregar datos a tu archivo');
        return
    }
    console.log('Se agrego Exitosamente');
});
