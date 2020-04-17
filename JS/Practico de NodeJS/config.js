//archivo de configuracion
module.exports = {
  api: {
    port: process.env.API_PORT || 3000
  },
  jwt: {
    secret: process.env.JWT_SECRET || "es-un-secreto-entre-tu-y-yo"
  },
  pg: {
    user: process.env.PG_USER || "postgres",
    host: process.env.PG_HOST || "localhost",
    database: process.env.PG_DATABASE || "prueba_cafeto",
    password: process.env.PG_PASSWORD || "Datecsa2019",
    port: process.env.PG_PORT || 5432
  },
  postgresService: {
    port: process.env.PG_SERVICE_PORT || 3001,
    host: process.env.PG_SERVICE_HOST || "localhost",
    port: process.env.PG_SERVICE_PORT || 5432
  }
};
