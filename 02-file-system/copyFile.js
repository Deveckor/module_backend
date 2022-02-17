const fs = require('fs');   

fs.copyFile('./nuevaCarpeta/archivoNuevo.txt','./nuevaCarpeta/copiaArchivoNuevo.txt',(err)=>{
(err)? console.log('No se pudo copiar el archivo'): console.log('se copio el archivo exitosamente');
});

