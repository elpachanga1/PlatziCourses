//logica de negocios
const nanoid = require("nanoid");
const auth = require("../Auth");

const TABLA = "user";

module.exports = function(injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../Store/dummy");
  }

  function list() {
    return store.list(TABLA);
  }

  function get(id) {
    return store.get(TABLA, id);
  }

  //funcion para crear sesiones ante el controller de sesiones
  async function upsert(body) {
    const user = {
      name: body.name,
      username: body.username,
      id: body.id ? body.id : nanoid()
    };

    if (body.username || body.password) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password
      });
    }

    return store.upsert(TABLA, user);
  }

  return {
    list,
    get,
    upsert
  };
};
