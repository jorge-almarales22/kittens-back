import express from 'express';
import cors from 'cors';
import { routerKittens } from '../routes/kittens.route.js';

export default class Server{

    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use('/kittens', routerKittens);
    }

    listen(){
        this.app.listen(4000, () => {
            console.log('Server started on port 4000');
        });
    }
}