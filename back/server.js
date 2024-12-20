require("dotenv").config();
const app = require("./app");
const { sequelize } = require("./models");

const fs = require("fs");
const path = require("path");

app.listen(process.env.PORT, async () => {
  await sequelize.sync({ force: true });

  const category = require("./dummy/Categories_dummy");
  const subCategory = require("./dummy/SubCategories_dummy");
  const board = require("./dummy/Boards_dummy");
  const user = require("./dummy/Users_dummy");

  for (let i = 0; i < category.length; i++) {
    await sequelize.models.Categories.create(category[i]);
  }
  for (let i = 0; i < subCategory.length; i++) {
    await sequelize.models.SubCategories.create(subCategory[i]);
  }

  for (let i = 0; i < user.length; i++) {
    await sequelize.models.Users.create(user[i]);
  }

  for (let i = 0; i < board.length; i++) {
    await sequelize.models.Boards.create(board[i]);
  }

  console.log(`Back Server Start ${process.env.PORT}`);
});
