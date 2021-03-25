const {Sequelize, sequelize} = require('../config/db');

const Todo = sequelize.define('Todo', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: { msg: "Title can not be null" }, 
      notEmpty: { msg: "Title can not be empty" },
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Description can not be null" }, 
      notEmpty: { msg: "Description can not be empty" },
    }
  },
  status: Sequelize.STRING
})

module.exports = Todo;