const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const qrRoutes = require('./routes/qr.routes');
const { syncDB } = require('./models');

const app = express();



app.use(cors({
    origin: "http://localhost:3000" // Permitir peticiones del frontend
  }));
app.use(bodyParser.json());
app.use('/api', qrRoutes);

syncDB();

module.exports = app;
