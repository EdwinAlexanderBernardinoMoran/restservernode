import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // metodos iniciales
        this.middlewires();

        // Definiendo mis rutas
        this.routes()
    }

    // Funciones que se ejecutan antes de que pasen en nuestra rutas
    middlewires(){

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

export default Server;