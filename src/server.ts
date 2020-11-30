import 'reflect-metadata';
import cors from 'cors';

import express from 'express';
import router from './routes/index';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('Server is running on 3333 🐱‍🐉!');
});
