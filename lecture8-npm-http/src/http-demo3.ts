import http from 'http';
import fs from 'fs';

http.createServer((req, res) => {
    // let html = fs.readFileSync('index.html', 'utf-8');
    // html = html.replace('{username}', 'John Smith');
    // res.end(html);
  
    const myurl = new URL('http://'+ req.headers.host+req.url);
    console.log(myurl);
    console.log(myurl.searchParams.get('username'), myurl.searchParams.get('password'))
    // console.log(req.method);
    // console.log(req.headers);
    fs.createReadStream('index.html').pipe(res);
}).listen(3000);
