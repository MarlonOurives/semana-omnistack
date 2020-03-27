const express = require('express'); //é um pacote
const cors = require('cors');
const { errors} = require('celebrate');
const routes = require('./routes'); //importa as rotas
//passa o caminho relativo, para referenciar a mesma pasta do arquivo index "./"

const app = express();

app.use(cors());

app.use(express.json());//informa o express que está usando json, importante vim antes das rotas

app.use(routes);
app.use(errors());

module.exports = app;