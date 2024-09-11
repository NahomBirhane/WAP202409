import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        fs.createReadStream('signup.html').pipe(res);
    } else if (url === '/signup') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            fs.writeFileSync('database.txt', body, 'utf-8');
            res.statusCode = 302;
            res.setHeader('Location', '/success');
            return res.end();
        });

    } else if (url === '/success') {
        res.end('Success!')

    } else {
        res.end('Page not found 404');
    }
}).listen(3000);