const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Endpoint para servir a página HTML
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/index`);
});
