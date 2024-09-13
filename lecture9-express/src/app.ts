import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.urlencoded());


app.all('/user', (req, res, next) => {
    console.log('1......');
    next();
}, (req, res, next) => {
    console.log('2......');
    next('2323232');
}, (req, res, next) => {
    console.log('3......');
    next();
},(req, res, next) => {
    console.log('4......');
    next();
});



app.use((req, res, next) => {
    res.status(404).send(404);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send("Something wrong!");
});


app.listen(3000, () => console.log('listening on 3000!!!!!'));