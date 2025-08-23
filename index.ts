import express from "express";
import { createConnection } from 'typeorm';
import config from "./typeorm.config";
import loadApp from './src/startup/app';

require('express-async-errors');
require("dotenv").config();

const app = express();

loadApp(app);

createConnection(config)
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`The application is listening on port ${port}.`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error.message);
  });

process.on('exit', async function () {
  console.log('Exiting...');
});

