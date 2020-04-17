//archivo de manejo de peticiones

const express = require("express"); //llamado a librerias de npm
const router = express.Router();

const controller = require("./Controller");
const response = require("../../Network/Response"); //llamado a archivo local

router.get("/", function(req, res) {
  controller
    .GetMessages()
    .then(messageList => {
      response.success(req, res, messageList);
    })
    .catch(ex => {
      response.error(req, res, "Unexpected Error", 500, ex);
    });
  /*
  console.log(req.headers); //header de la peticion
  res.header({
    "custom-header": "Nuestro valor Personalizado"
  }); //header personalizado

  response.success(req, res, "Hablame, desde GET ñero");
  */
});

router.post("/", function(req, res) {
  //console.log(req.query); //query de la peticion, ej: /user?uid=XXX
  //console.log(req.body); //cuerpo del mensaje

  controller
    .AddMessage(req.body.user, req.body.message)
    .then(fullMessage => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, "Info Invalida", 400);
    });
});

module.exports = router;
