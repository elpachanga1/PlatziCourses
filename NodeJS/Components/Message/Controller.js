const Store = require("./Store");

function GetMessages() {
  return new Promise((resolve, reject) => {
    resolve(Store.list());
  });
}

function AddMessage(user, message) {
  console.log(user);
  console.log(message);

  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No Hay usuario o mensaje");
      reject("Los Datos Son Incorrectos");
      return false;
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    };

    console.log(fullMessage);
    Store.add(fullMessage);

    resolve(fullMessage);
  });
}

module.exports = {
  AddMessage,
  GetMessages
};
