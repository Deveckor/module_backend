const fs = require('fs');   

fs.mkdir('nuevaCarpeta',(err)=>{
    (err)
    ? console.log('No se pudo crear directorio')
    :console.log('Se creo directorio exitosamente');
})