//archivo de configuracion de capa de red
const express = require('express');

const response = require('../../../Network/response');
const Controller = require('./index');

const router = express.Router();

//Routes
router.get('/', list);
router.get('/:id', get);
router.get('/', upsert);
router.get('/', remove);

//internal functions
function list (req, res) {
    Controller.list()
        .then((lista) => response.success(req, res, lista, 200))
        .catch((error) => response.error(req, res, err.message, 500));
}

function get (req, res) {
    Controller.get(req.params.id)
        .then((user) => response.success(req, res, user, 200))
        .catch((error) => response.error(req, res, err.message, 500));
}

function upsert (req, res) {
    Controller.upsert(req.body)
        .then((user) => response.success(req, res, user, 200))
        .catch((error) => response.error(req, res, err.message, 500));
}

function remove (req, res) {
    Controller.remove(req.params.id)
        .then((user) => response.success(req, res, user, 200))
        .catch((error) => response.error(req, res, err.message, 500));
}

module.exports = router;