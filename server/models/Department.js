const Sequelize = require('sequelize');
const {sequelize} = require('../config/db');

const Department = sequelize.define('department', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name can not be null" }, 
      notEmpty: { msg: "Name can not be empty" },
    }
  },
  code: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Department;