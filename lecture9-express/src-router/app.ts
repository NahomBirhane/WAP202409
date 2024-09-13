import express, { NextFunction, Request, Response } from "express";
import path from 'path';
import productRouter from './router/productRouter';
import userRouter from './router/userRouter';

const app = express();

app.use(express.urlencoded());

app.use('/product', productRouter);
app.use('/user', userRouter);
app.use('/error', (req, res, next) => {
    throw new Error('Whoops!');
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send("Something wrong!");
});




app.listen(3000, () => console.log('listening on 3000!!!!!'));