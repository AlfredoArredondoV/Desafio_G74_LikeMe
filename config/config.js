/*import path from 'path';
import { fileURLToPath } from 'url';
*/
import pkg from 'pg';

import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//require('dotenv').config({path: __dirname + '/.env'});
//dotenv.config({path: __dirname + '/.env'});

const { Pool } = pkg;
/*
export default {
    db: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },
    
    PORT: process.env.PORT
}*/

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};
//console.log(config);
export const db = new Pool(config);
