/*
ethan (average-kirigiri-enjoyer)
SCS Boot Camp Module 13 Weekly Challenge - E-Commerce Back-End
Created 2023/10/11
Last Edited 2023/10/11
*/

const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
