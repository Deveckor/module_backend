const fsPromise = require('fs').promises;

let data = 'Este es un nuevo archivo',
dataTwo = '\nHola nuevo texto'

function crearCarpeta() {
    
        
        return fsPromise.mkdir('./Nueva_carpeta')
   
}
function crearArchivo(dato){
   
        return fsPromise.writeFile('./Nueva_carpeta/nuevoArchivo.txt',dato,'utf-8')
    
}
function copiarArchivo() {
    
        
        return fsPromise.copyFile('./Nueva_carpeta/nuevoArchivo.txt', './Nueva_carpeta/copia.txt')
    
}
function leerAchivo() {
    
        
        return fsPromise.readFile('./Nueva_carpeta/copia.txt','utf-8')
        
  
}
function eliminarArchivo() {
    
        return fsPromise.unlink('./Nueva_carpeta/nuevoArchivo.txt')
    
}
function agregarTexto(datoDos){
    
        
        return fsPromise.appendFile('./Nueva_carpeta/copia.txt',datoDos,'utf-8')
    
}

let main = async () => {
    let carpeta = await crearCarpeta();
    console.log('Creando carpeta');
    let archivo = await crearArchivo(data);
    console.log('creando archivo');
    let copiar = await copiarArchivo();
    console.log('creando copia');
    
    let eliminar = await eliminarArchivo();
    console.log('Eliminando archivo');
    let agregado = await agregarTexto(dataTwo);
    console.log('agregando datos');
    let leer = await leerAchivo();
    console.log('leeyendo archivo');
    
    

};

main()
.then()
.catch(err => console.log(err))