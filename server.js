const express = require('express');
const orderRoutes = require('./src/routes/orderRoutes');
const connectDB = require('./src/config/db'); 
connectDB();

const app = express();
//Leitura de arquivos JSON
app.use(express.json());
// Define o prefixo das rotas
app.use('/order', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});