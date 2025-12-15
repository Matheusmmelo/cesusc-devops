const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Mensagem da feature de teste
  res.send('Servidor rodando! Atualização de teste na feature.');
});

app.get('/health', (req, res) => {
  res.send('ok');
});

module.exports = app;
