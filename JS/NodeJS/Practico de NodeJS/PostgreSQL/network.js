const express = require("express");

const response = require("../Network/response");
const Store = require("../Store/postgres");

const router = express.Router();

router.get("/:tabla", list);
router.get("/:tabla/:id", get);
router.post("/:tabla", insert);
router.put("/:tabla", update);

async function list(req, res, next) {
  const datos = await Store.list(req.params.tabla);
  response.success(req, res, datos, 200);
}
async function get(req, res, next) {
  const datos = await Store.get(req.params.tabla, req.params.id);
  response.success(req, res, datos, 200);
}

async function insert(req, res, next) {
  const datos = await Store.insert(req.params.tabla, req.body);
  response.success(req, res, datos, 200);
}

async function update(req, res, next) {
  const datos = await Store.update(req.params.tabla, req.body);
  response.success(req, res, datos, 200);
}

module.exports = router;
