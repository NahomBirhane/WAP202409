import express from "express";

const app = express();
// app.set('case sensitive routing', true);
app.enable('case sensitive routing');


// app.use('/user') ->app.use('/user/*/*/*')
app.use('/user', (req, res, next) => {
    console.log('1.....');
    res.send('Hello');
});

// match everything
app.use((req, res, next) => {
    res.send('Match everything');
});


app.listen(3000, () => console.log('listening on 3000!!!!!'));