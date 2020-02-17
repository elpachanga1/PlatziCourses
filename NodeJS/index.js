const express = require("express"); //llamado a librerias de npm
const bodyParser = require("body-parser");

const router = require("./Network/Routes"); //llamado a archivo local

var app = express(); //convoco express
app.use(bodyParser.json()); //recibo json
app.use(bodyParser.urlencoded({ extended: false })); //recibo urlencoded tambien
//app.use(router); //enrutamiento para recibir tipos de peticiones HTTP establecidas

router(app);

app.use("/app", express.static("public")); //gracias a esto se pueden llamar recursos estaticos desde la carpeta public
app.listen(3000);
console.log("la app esta escuchando en http://localhost:3000");
