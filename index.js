import express from 'express';
import router from './routes/routes.js'
import cors from 'cors';
//const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//middleware para recibir json
app.use(express.json());

//middleware para recibir form
app.use(express.urlencoded((false)));

app.use(router);


app.listen(PORT, () => console.log(`server corriendo en ${PORT}`));