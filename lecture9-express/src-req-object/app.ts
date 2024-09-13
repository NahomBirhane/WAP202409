import express from "express";

const app = express();

app.use(express.json());

// query string - don't put in URL
app.use('/add-product',(req, res) => {
    console.log(req.query);
    res.send('add product');
});

// req.params, not optional, use placeholder :something
app.use('/users/:uid/posts/:pid/comments', (req, res) => {
    console.log(req.params);
    const {uid, pid} = req.params;
    res.send(`get all comments belong to ${uid}, post id: ${pid}`)
})

app.use('/users', (req, res) => {
    console.log(req.body);
    res.json({success: true});
});


app.listen(3000, () => console.log('listening on 3000!!!!!'));