import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

config();
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
