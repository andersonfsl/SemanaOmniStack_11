/**
 * Rota / Método
 */

 /**
  * Métodos HTTP:
  * 
  * Método GET: busca uma informação do back-end; 
  *
  * Método POST: cria uma informação no back-end
  * 
  * Método DELETE: Deleta uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: parâmetros nomeados enviados na rota após a "?" (Filtros, Paginação)
   * 
   * Route Params:parâmetros usados para identificar recursos
   * 
   * Request Body: corpo da requisição, usado para criar ou alterar recursos
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);