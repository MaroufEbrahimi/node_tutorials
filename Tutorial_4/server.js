const http = require('http')

const server = http.createServer((req, res) => {
   console.log(req.method);
})

server.listen(8000, 'localhost', () => {
   console.log('listening on port 8000');
}) 