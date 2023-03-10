import env from "./env.config.js";

const dbConfig = {
  HOST: env.DBHOST,
  USER: env.DBUSER,
  PASSWORD: env.DBPASS,
  DB: env.DBNAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
