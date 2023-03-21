/* jshint esversion: 6 */

// This code will test that the express server is running successfully and can
// fetch data about the current environment correctly via dotenv.

require('dotenv').config();
// const express = require('express');
import express from 'express';
const app = express();

const db = require('./src/models');

const testRouter = require('./src/routes/test.routes');


const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi:"3.0.0",
    info: {
      title: 'E-commerce API',
      description: 'E-commerce API Information',
      servers: [
        {
          url: 'https://team-furebo-e-commerce-bn.onrender.com',
        },
      ],
    },
  },

  apis: ['index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              properties:
 *                  firstname:
 *                      type: string
 *                  lastname:
 *                      type: string
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  confirmPassword:
 *                      type: string  
 */


/**
 * @swagger
 * /home:
 *  get:
 *      description: Display homepage
 *      responses:
 *          '200':
 *              description: successful request
 */


/**
 * @swagger
 * /api/register:
 *  post:
 *      summary: registering a user
 *      description: This api is used to register a user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          200:
 *              description: This api is used to register a user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/User'
 */




// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

app.get('/home', (req, res) => {
  res.status(200).send('WELCOME!');
});

app.use('/', testRouter);

require('./src/routes/user.routes')(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
module.exports = app;
