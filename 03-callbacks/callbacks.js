// const muro = {
//     estaConstruido: false,
//     estaAplanado: false,
//     estaPintado: false
// }

// function construir(muroAConstruir, callback) {
//     setTimeout(() => {
//         let error = null;
//         muroAConstruir.estaConstruido = true;
//         if (muroAConstruir.estaConstruido == false) {
//             error = 'No se pudo construir'
//         }
//         callback(error, muroAConstruir)
//     }, 3000);
// }

// construir(muro, (err, muroConstruido)=>{
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('muro construido,', muroConstruido);
// })

const procesoInscripcion = {
    entrevista : false,
    oferta: false,
    inscripcion: false,
    asistirAClases: false,
}
function entrevista( proceso, callback){
    setTimeout(() => {
        let err = null;
        proceso.entrevista = true;
        if(proceso.entrevista == false){
            error = ' NO se puede seguir con el proceso'
        }
        callback(err, proceso)
    }, Math.random() * 3000);
}
function oferta( proceso, callback){
    setTimeout(() => {
        let err = null;
        proceso.oferta = true;
        if(proceso.oferta == false){
            error = ' NO se puede seguir con el proceso'
        }
        callback(err, proceso)
    }, Math.random() * 3000);
}
function inscripcion( proceso, callback){
    setTimeout(() => {
        let err = null;
        proceso.inscripcion = true;
        if(proceso.inscripcion == false){
            error = ' NO se puede seguir con el proceso'
        }
        callback(err, proceso)
    }, Math.random() * 3000);
}
function asistirAClases( proceso, callback){
    setTimeout(() => {
        let err = null;
        proceso.asistirAClases = true;
        if(proceso.asistirAClases == false){
            error = ' NO se puede seguir con el proceso'
        }
        callback(err, proceso)
    }, Math.random() * 3000);
}


entrevista(procesoInscripcion, (err, proceso)=>{
    if(err){
        console.log(err);
        return
    }
    
    oferta(procesoInscripcion, (err, proceso)=>{
        if (err) {
            console.log(err);
            return
        }
        
        
        inscripcion(procesoInscripcion,(err,proceso)=>{
            if(err){
                console.log(err);
                return
            }
            
            
            asistirAClases(procesoInscripcion, (err, proceso)=>{
                if (err) {
                    console.log(err);
                    return
                }
                console.log(proceso);
            })
        })
    })
})


// mcrmcioce
const procesoInscripcion = {
    entrevista : false,
    oferta: false,
    inscripcion: false,
    asistirAClases: false,
}

const entrevista = (proceso)=>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            
            res(proceso.entrevista = true);
            if (proceso.entrevista === false) {
                rej(`No se puede continuar con el proceso: ${proceso.entrevista}`)
            }
        }, Math.random()* 3000);
    })
}

const oferta = (proceso)=>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            
            res(proceso.oferta = false)
            if (proceso.oferta === false) {
               
                 rej(`No se puede continuar con el proceso: ${proceso.oferta}`)
            }
        }, Math.random()* 3000);
    })
}

const inscripcion = (proceso)=>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            
            res(proceso.inscripcion = true)
            if (proceso.inscripcion === false) {
                 rej(`No se puede continuar con el proceso: ${proceso.inscripcion}`)
            }
        }, Math.random()* 3000);
    })
}

const asistirClase = (proceso)=>{
    return new Promise((res, rej)=>{
        setTimeout(() => {
            
            res(proceso.asistirAClases = true)
            if (proceso.asistirAClases === false) {
                rej(`No se puede continuar con el proceso: ${proceso.asistirAClases}`)
            }
        }, Math.random()* 3000);
    })
}


entrevista(procesoInscripcion)
.then(res =>{
    console.log(`Realizando entrevista...`);
    return oferta(procesoInscripcion)
    .then(res =>{
        console.log(`Realizando oferta...`);
        return inscripcion(procesoInscripcion)
        .then(res =>{
            console.log(`Realizando inscripcion...`);
            return asistirClase(procesoInscripcion)
            .then(res =>{
                console.log(`Proceso finalizado...`);
                console.log(procesoInscripcion);
            })
            .catch(err=>{
                console.log(err)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})
.catch(err => {
    console.log(err)
})