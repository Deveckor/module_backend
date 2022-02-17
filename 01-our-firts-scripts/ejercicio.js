

let saludar = (nombre)=>{
    return  `Hola como estas ${nombre}?`
}
console.log(saludar('hector'));

let aleatorio = ()=>{
    const arrayNames = ['Paco','hector','Jess','Fer','Gus'];

    const indexArray = Math.floor(Math.random() * (arrayNames.length - 0)+ 0)

    return arrayNames[indexArray]
}

const fs = require('fs');

console.log(fs);