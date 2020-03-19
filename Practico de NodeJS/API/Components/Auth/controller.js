const bcrypt = require("bcrypt");
const auth = require("../../../Auth");
const TABLA = "auth";

module.exports = function(injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../Store/dummy");
  }

  async function login(username, password) {
    const data = await store.query(TABLA, { username: username });

    //validacion de encriptacion bidireccional (cliente manda contraseña sin encriptar)
    return bcrypt.compare(password, data.password).then(iguales => {
      if (iguales) {
        //generar token
        return auth.signature(data);
      } else {
        throw new Error("Informacion Invalida");
      }
    });

    //validacion de encriptacion unidireccional (cliente manda contraseña encriptada)
    /*if (data.password === password) {
      //generar token
      return auth.signature(data);
    } else {
      throw new Error("Informacion Invalida");
    }
    return data;*/
  }

  async function upsert(data) {
    const authData = {
      id: data.id
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLA, authData);
  }

  return {
    upsert,
    login
  };
};
