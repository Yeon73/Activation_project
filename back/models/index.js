const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const environment = process.env.NODE_ENV || "development"
const config = require("../config")["db"][environment];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf("model") !== -1)
  .forEach((file) => require(path.join(__dirname, file))(sequelize, Sequelize));

const { models } = sequelize;
for (const key in models) {
  if (typeof models[key].associate !== "function") continue;
  models[key].associate(models);
}

module.exports = {
  sequelize,
  Sequelize,
};
