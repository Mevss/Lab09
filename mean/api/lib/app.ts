// import express from 'express';
// import { config } from './config';
// import Controller from "./interfaces/controller.interface";
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import mongoose from 'mongoose';
//
//
// class App {
//     public app: express.Application;
//
//     constructor(controllers: Controller[]) {
//         this.app = express();
//         this.initializeMiddlewares();
//         this.initializeControllers(controllers);
//         this.connectToDatabase();
//       }
//
//
//      private initializeMiddlewares(): void {
//         this.app.use(bodyParser.json());
//         this.app.use(morgan('dev'));
//      }
//
//
//     private initializeControllers(controllers: Controller[]): void {
//         controllers.forEach((controller) => {
//             this.app.use('/', controller.router);
//         });
//     }
//     private async connectToDatabase(): Promise<void> {
//         try {
//           await mongoose.connect(config.databaseUrl);
//           console.log('Connection with database established');
//         } catch (error) {
//           console.error('Error connecting to MongoDB:', error);
//         }
//
//         mongoose.connection.on('error', (error) => {
//           console.error('MongoDB connection error:', error);
//         });
//
//         mongoose.connection.on('disconnected', () => {
//           console.log('MongoDB disconnected');
//         });
//
//         process.on('SIGINT', async () => {
//           await mongoose.connection.close();
//
//           console.log('MongoDB connection closed due to app termination');
//         process.exit(0);
//         });
//
//         process.on('SIGTERM', async () => {
//         await mongoose.connection.close();
//         console.log('MongoDB connection closed due to app termination');
//         process.exit(0);
//         });
//     }
//
//
//     public listen(): void {
//         this.app.listen(config.port, () => {
//             console.log(`App listening on the port ${config.port}`);
//         });
//     }
//  }
//  export default App;

import express from 'express';
import { config } from './config';
import Controller from "./interfaces/controller.interface";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors package

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.connectToDatabase();
    }

    private initializeMiddlewares(): void {
        // Configure CORS options
        const corsOptions: cors.CorsOptions = {
            origin: 'http://localhost:4200', // Allow your Angular frontend
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'],
            credentials: true, // If you need to send cookies or other credentials
        };

        // Use CORS middleware
        this.app.use(cors(corsOptions));

        // Optional: Handle preflight requests for all routes
        this.app.options('*', cors(corsOptions));

        // Existing middlewares
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    private async connectToDatabase(): Promise<void> {
        try {
            await mongoose.connect(config.databaseUrl);
            console.log('Connection with database established');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }

        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('MongoDB connection closed due to app termination');
            process.exit(0);
        });

        process.on('SIGTERM', async () => {
            await mongoose.connection.close();
            console.log('MongoDB connection closed due to app termination');
            process.exit(0);
        });
    }

    public listen(): void {
        this.app.listen(config.port, () => {
            console.log(`App listening on the port ${config.port}`);
        });
    }
}

export default App;
