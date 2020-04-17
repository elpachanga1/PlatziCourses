//Mock, un modelo de base de datos falso para pruebas
const list = [];

function addMessage(Message) {
  list.push(Message);
}

function getMessage() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessage
};
