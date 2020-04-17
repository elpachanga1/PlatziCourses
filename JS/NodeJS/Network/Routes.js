//archivo de rutas

const express = require("express"); //llamado a librerias de npm
const message = require("../Components/Message/Network");

const routes = function(server) {
  server.use("/message", message);
};

module.exports = routes;
