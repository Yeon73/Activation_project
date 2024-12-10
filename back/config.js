require("dotenv").config();
const crypto = require("crypto");
const JWT = require("./lib/jwt");
const env = process.env;
const salt = env.SALT;

const config = {
  env: env.NODE_ENV || "development",
  port: env.PORT || "3000",
  jwt: new JWT({ crypto, salt }),
  db: {
    development: {
      username: env.DB_USER || "community_kby",
      password: env.DB_PASSWORD || "Byeongyeon2!",
      port: env.DB_PORT || "3306",
      host: env.DB_HOST || "localhost",
      database: env.DB_DATABASE || "community_db",
      dialect: env.DB_DIALECT || "mysql",
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  },
  kakao: {
    host: env.KAKAO_HOST || "https://kakao.com",
    rest_api_key: env.REST_API_KEY || "your_rest_api_key",
    redirect_uri: env.REDIRECT_URI || "https://your_redirect_uri",
    client_secret: env.CLIENT_SECRET || "your_client_secret",
  },
  server: {
    host: env.SERVER_HOST || "localhost",
    port: env.SERVER_PORT || "3005",
    my: env.MY_SERVER || "localhost",
    myPort: env.MY_PORT || "3000",
  },
};

module.exports = config;
