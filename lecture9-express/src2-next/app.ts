import express from "express";

const app = express();
// app.set('case sensitive routing', true);
app.enable('case sensitive routing');

// match everything
app.use((req, res, next) => {
    console.log('1.....');
    next();
});

// app.use('/user') ->app.use('/user/*/*/*')
app.use('/user', (req, res, next) => {
    console.log('2.....');
    res.send('Hello');
});

// app.use((req, res, next) => {
//     res.status(404).send('404 Page not Found!');
// });

app.listen(3000, () => console.log('listening on 3000!!!!!'));