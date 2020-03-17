const nanoid = require('nanoid');

const TABLA = "user";

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../Store/dummy');
    }

    function list() {
        return store.list(TABLA);
    }
    
    function get(id) {
        return store.get(TABLA, id);
    }

    function upsert(body) {
        const user = {
            name: body.name,
            id: (body.id) ? body.id : nanoid()
        }

        return store.upsert(TABLA, user);
    }

    function remove(id) {
        return store.remove(TABLA, id);
    }

    return {
        list,
        get,
        upsert,
        remove
    }
}