const express = require("express");
const bodyParser = require("body-parser");

const config = require("../config.js");

const app = express();

app.use(bodyParser.json());

app.listen(config.postgresService.port, () => {
  console.log(
    "Servicio de datos PostgreSQL escuchando en el puerto " +
      config.postgresService.port
  );
});
