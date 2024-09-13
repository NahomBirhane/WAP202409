import express from 'express';

const router = express.Router();

router.get('/add', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Document</title>
         </head>
         <body>
             <form action="save" method="post">
                 <p>Title: <input name="title"></p>
                 <p>price: <input type="number" name="price"></p>
                 <button>Submit</button>
             </form>
         </body>
         </html> 
     `);
});

router.post('/save', (req, res) => {
    console.log(req.body);
    res.send('Save successfully!');
});

export default router;