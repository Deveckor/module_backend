const fs = require('fs');

fs.readdir('./nuevaCarpeta',(err, files)=>{
    (err)
    ?console.log('no se pudo leer carpeta')
    :console.log(files);
})