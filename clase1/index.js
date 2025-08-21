const http = require("http")
//import http from "http"

http.createServer(function(request, response){
console.log("hola desde el servidor!", request.url )
response.end("llego la solicitud")
}).listen(2025)