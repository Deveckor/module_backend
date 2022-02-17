const http = require('http');
const port = 8080;

const server = http.createServer((request,response)=>{
    

    if (request.url == '/koder') {
        if (request.method == 'GET') {
            response.write('<h1>Hola desde koders desde GET</h1>')
            
        } else if (request.method == 'POST'){
            response.write('<h1>Hola desde koders desde POST</h1>')
            
        }
        
    } else {
        response.write('<h1>No existe url</h1>')
        
    }
    response.end()
})

server.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
})


