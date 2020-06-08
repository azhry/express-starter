require("dotenv").config();

import express from 'express';
import '@babel/polyfill';
import cors from 'cors';
import path from 'path';

import routes from './app/routes';

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());
app.use(express.urlencoded({ extended: false })); // application/x-www-urlencoded
app.use(express.json()); // application/json

app.use('/api/v1', routes);

app.listen(process.env.PORT).on('listening', () => {
    console.log(`🚀 are live on ${process.env.PORT}`);
});

export default app;