import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello World-------------');
});

server.listen(3000, () => {console.log('start on 3000 successfully!')});