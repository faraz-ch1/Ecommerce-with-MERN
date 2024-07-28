import express from 'express';
import Connection from './database/db.mjs';
import DefaultData from './default.mjs';
import Router from './routes/route.mjs';
import cors from 'cors'
import bodyParser from 'body-parser';


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`server is running successfuly on ${PORT}`))

DefaultData();