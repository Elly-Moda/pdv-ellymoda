const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('PDV - Elly Moda Íntima e Acessórios');
});

app.get('/cliente', (req, res) => {
    res.send('Aqui será o cadastro ou listagem de clientes');
});

app.get('/produtos', (req, res) => {
    res.send('Aqui será a lista de produtos');
});

app.get('/vendas', (req, res) => {
    res.send('Aqui será o controle de vendas');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
