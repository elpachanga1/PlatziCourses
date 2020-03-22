//archivo de configuracion de capa de red
const express = require("express");

const Controller = require("./index");
const response = require("../../../Network/response");

const router = express.Router();

const secure = require("../../../Auth/secure");

//Routes
router.get("/", list);
router.get("/movie/:id", getPerMovie);
router.post("/", secure("update"), upsert);

function list(req, res, next) {
  Controller.list()
    .then(lista => response.success(req, res, lista, 200))
    .catch(next);
}

function getPerMovie(req, res, next) {
  Controller.getPerMovie(req.params.id)
    .then(lista => response.success(req, res, lista, 200))
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert({ ...req.body, user_id: req.user.id })
    .then(user => response.success(req, res, user, 200))
    .catch(next);
}

module.exports = router;
