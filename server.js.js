const express = require('express');
const app = express();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const PORT = 3000;

const db = new sqlite3.Database('./database.db');

app.use(express.static('public'));
app.use(express.json());

// Inicializa o banco de dados com uma tabela de produtos
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT,
    codigo TEXT,
    quantidade INTEGER,
    tamanho TEXT
  )`);
});

// Rotas
app.get('/produtos', (req, res) => {
  db.all("SELECT * FROM produtos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/produtos', (req, res) => {
  const { categoria, codigo, quantidade, tamanho } = req.body;
  db.run("INSERT INTO produtos (categoria, codigo, quantidade, tamanho) VALUES (?, ?, ?, ?)", [categoria, codigo, quantidade, tamanho], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});