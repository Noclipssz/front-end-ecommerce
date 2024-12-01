const express = require('express');
const axios = require('axios');
const path = require('path');
const { atualizarProdutos } = require('./public/js/script');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
