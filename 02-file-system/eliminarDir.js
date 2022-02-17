const fs = require('fs');   

const dir = './nuevaCarpeta'

    fs.readdir(dir,(err, file)=>{
        if (err) {
           return console.log('Error al leer directorio');
        }
        if(file.length > 0){
            
            for (let i = 0; i < file.length; i++) {
                if(fs.lstatSync(`${dir}/${file[i]}`).isFile()){
                    deleteFile(file[i],dir);
                    console.log(`Se elimino archivo ${file[i]}, exitosamente`);
                    
                }
               
                if (fs.lstatSync(`${dir}/${file[i]}`).isDirectory()) {
                    
                    fs.rmdir(`${dir}/${file[i]}`, (err) =>{
                        if(err){
                            return console.log('Error al eliminar directorio');
                        }
                        console.log(`Se elimino directorio ${file[i]}, exitosamente`);
                    })
                }
               
            }
            
            fs.rmdir(dir,(err)=>{
                if(err){
                    return console.log('No se pudo eliminar directorio');
                }
                console.log(`Se elimino directorio ${dir}, exitosamente`);
            })
            
        }
    })


    
function deleteFile(file, dir = null) {
    console.log(`${dir}/${file}`);
    fs.unlink(`${dir}/${file}`,(err)=>{
        if (err) {
            return console.log('No se pudo eliminar Archivo');
        }
        console.log(`se elimino correctamente el archivo ${file}`);
    })
}

function deleteDir(dir, dir2= null){
    fs.rmdir(`${dir}`,(err)=>{
        if (err) {
            return console.log('Error al eliminar directorio.');
        }
        console.log(`Se elimino el directorio ${dir}`);
    })
}