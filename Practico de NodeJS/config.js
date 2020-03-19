//archivo de configuracion
module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || "es-un-secreto-entre-tu-y-yo"
  }
};
