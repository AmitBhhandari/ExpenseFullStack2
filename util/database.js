const Sequelize = require("sequelize");

const sequelize = new Sequelize("expenseproject", "root", "Amitbhand68@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
