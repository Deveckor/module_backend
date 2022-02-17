// const proceso = {
//     entrevista : false,
//     oferta: false,
//     inscripcion: false,
//     asistirAClases: false,
// }

// const promise = new Promise((resolve, reject)=>{

//     let todoBien = true;

//     if (todoBien) {
//         resolve('ok!')
//     } else {
//         reject('Todo mal')
//     }
// })

// promise
//     .then((valor)=>{console.log(valor);})
//     .catch((error)=>{console.log(error);})


// const procesoInscripcion = (obj)=> {
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
            
//             res(obj)
//         }, 0 | Math.random() * 1000);
//         if(obj.entrevista === false || obj.oferta === false || obj.inscripcion === false || obj.asistirAClases === false){
//             rej(`el proceso no esta completado`)
//         }
//     })
// }

// procesoInscripcion(proceso)
//     .then((obj) =>{
//         obj.entrevista = true;
//         return procesoInscripcion(proceso)
//     })
//     .then(obj => {
//         obj.oferta = true;
//         return procesoInscripcion(proceso)
//     })
//     .then(obj=>{
//         obj.inscripcion = false;
//         return procesoInscripcion(proceso)
//     })
//     .then(obj =>{
//         obj.asistirAClases = true;
//        return console.log(obj);
//     })
//     .catch(err => console.log(err))

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
    
}

// const construir = (muroAConstruir)=>{
    
//     return new Promise((res, rej)=>{
//         res(muroAConstruir.estaConstruido = true)
//         if (muroAContruir.estaConstruido === false) {
//             return rej(`Error el muro no esta construido`)
//         }
//     }

// }

const construir = (muroAConstruir)=>{
return new Promise((res,rej)=>{
    setTimeout(() => {
        res(muroAConstruir.estaConstruido = true)
    }, 2000);
    if (muroAconstruir.estaConstruido === false) {
        rej(`El muro no esta construido`)
    }
})

}

const aplanar = (muroAConstruir)=>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(muroAConstruir.estaAplanado = true)
        }, 2000);
        if (muroAconstruir.estaConstruido === false) {
            rej(`El muro no esta construido`)
        }
    })
    
    }

    const pintar = (muroAConstruir)=>{
        return new Promise((res,rej)=>{
            setTimeout(() => {
                res(muroAConstruir.estaPintado = true)
            }, 2000);
            if (muroAconstruir.estaAplanado === false) {
                rej(`El muro no esta aplanado`)
            }
        })
        
        }
    
    construir(muro)
    .then(res => {
          })
    .catch()