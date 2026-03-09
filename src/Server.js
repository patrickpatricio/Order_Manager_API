const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
//Leitura de arquivos JSON
app.use(express.json());
// Define o prefixo das rotas
app.use('/order', orderRoutes);