const procesoInscripcion = {
    entrevista : false,
    oferta: false,
    inscripcion: false,
    asistirAClases: false,
}

const entrevista = (proceso)=>{
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            proceso.entrevista = true

            if (proceso.entrevista) {
                resolve(proceso)
            } else {
                reject(`No se pudo Entrevistar...`)
            }

            
            
        }, Math.random() * 3000);
        
    })
}

const oferta = (proceso)=>{
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            proceso.oferta = true

            if (proceso.oferta) {
                resolve(proceso)
            } else {
                reject(`No se pudo realizar oferta...`)
            }

            
            
        }, Math.random() * 3000);
        
    })
}

const inscribir = (proceso)=>{
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            proceso.inscripcion = true

            if (proceso.inscripcion) {
                resolve(proceso)
            } else {
                reject(`No se pudo inscribir...`)
            }

            
            
        }, Math.random() * 3000);
        
    })
}
const asistirClase = (proceso)=>{
    return new Promise((resolve, reject)=>{
        
        setTimeout(() => {
            proceso.asistirAClases = true

            if (proceso.asistirAClases) {
                resolve(proceso)
            } else {
                reject(`No se pudo asistir a clases...`)
            }

            
            
        }, Math.random() * 3000);
        
    })
}

// entrevista(procesoInscripcion)
// .then(res =>{
//     console.log(`Inicia Entrevista...`);
//     oferta(procesoInscripcion)
//     .then(res=>{
//         console.log(`Realizando oferta...`);
//         inscribir(procesoInscripcion)
//         .then(res=>{
//             console.log(`Tramite de inscripción en proceso...`);
//             asistirClase(procesoInscripcion)
//             .then(res=>{
//                 console.log(`Proceso completado...`);
//                 console.log(procesoInscripcion);
//             })
//             .catch(err=>console.log(err))
//         })
//         .catch(err=>console.log(err))
//     })
//     .catch(err=>console.log(err))
// })
// .catch(err => console.log(err))


let main = async ()=>{
    const entrevistar = await entrevista(procesoInscripcion);
    console.log(`Inicia Entrevista...`);
    const ofertas = await oferta(entrevistar);
    console.log(`Realizando oferta...`);
    const inscripcion = await inscribir(ofertas);
    console.log(`Tramite de inscripción en proceso...`);
    const asistir = await asistirClase(inscripcion);
    console.log(`Proceso completado...`);
    console.log(asistir);
}

main()
.then()
.catch(err =>{
    console.log(err);
})