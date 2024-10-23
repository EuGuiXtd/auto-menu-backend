require('dotenv').config()

const express = require('express');
const MesaRoutes = require('./src/routes/mesa');

const app = express();

app.use(express.json());
app.use('/mesa', MesaRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});



module.exports = app;