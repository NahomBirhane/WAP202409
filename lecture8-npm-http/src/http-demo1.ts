import http from 'http';

http.createServer((req, res) => {
    res.end('Hello World-----dEEE--------');
})
.listen(3200, () => {console.log('start on 3200 successfully!')});