//base de datos dummy de pruebas
const db = {
    user: [
        {
            id: '1',
            nombre:"carlos"
        }
    ]
};
async function list (tabla) {
    return db[tabla];
}

async function get (tabla, id) {
    let column = await list(tabla);
    return column.filter(item => item.id === id)[0] || null; 
}

async function upsert (tabla, data) {
    db[tabla].push(data);
}

async function remove (tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
};