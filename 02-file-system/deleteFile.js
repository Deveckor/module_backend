const fs = require('fs');

fs.unlink('new-file.txt', (err)=>{
    if (err) {
        console.log('Occurio un error');
        return;
    }
    console.log('Eliminado exitosamente.');
})