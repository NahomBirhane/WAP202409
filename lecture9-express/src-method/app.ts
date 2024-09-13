import express from "express";

const app = express();

app.use(express.urlencoded());

app.get('/add-product', (req, res) => {
    res.send(`
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/save-product" method="post">
                <p>Title: <input name="title"></p>
                <p>price: <input type="number" name="price"></p>
                <button>Submit</button>
            </form>
        </body>
        </html> 
    `);
});

app.post('/save-product', (req, res) => {
    console.log(req.body);
    res.send('Save successfully!');
})



app.listen(3000, () => console.log('listening on 3000!!!!!'));