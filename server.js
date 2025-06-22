const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota inicial
app.get('/', (req, res) => {
  res.send('PDV Elly Moda Intima API rodando com sucesso!');
});

// Exemplo de rota de produtos
app.get('/produtos', (req, res) => {
  res.send('Listagem de produtos...');
});

// Exemplo de rota de vendas
app.get('/vendas', (req, res) => {
  res.send('Listagem de vendas...');
});

// Exemplo de rota de clientes
app.get('/clientes', (req, res) => {
  res.send('Listagem de clientes...');
});

// Start
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
