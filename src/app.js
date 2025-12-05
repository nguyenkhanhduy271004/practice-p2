import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import mongoose from './dbs/init.mongodb.js'
import router from './routers/index.js'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', router);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        stack: error.stack,
        message: error.message || 'Internal Server Error'
    });
});


export default app;