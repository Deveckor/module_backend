const http = require('http');
const port = 8080;

const json = {
    message: 'Hola'
}
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(json))
    res.end()
})

server.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto ${port}`);
})