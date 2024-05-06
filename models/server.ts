import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";
import db from "../db/connection";

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.dbConnection();
        // metodos iniciales
        this.middlewires();

        // Definiendo mis rutas
        this.routes()
    }

    // TODO: Conexion de mysql

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        
        } catch (error) {
            throw new Error(`${error} de conexion`);
        }
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