const http = require('http');
const PORT = 3000;






const server = http.createServer((req, res) => {
    res.end('Bienvenido al servidor');
    console.log(req.method);

});

server.listen(PORT, () => {
    console.log(`El servidor sta escuchando en el puerto ${PORT}`);
});