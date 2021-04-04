const Sequelize = require('sequelize');
const {sequelize} = require('../config/db');

const Designation = sequelize.define('designation', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Title can not be null" },
      notEmpty: { msg: "Title can not be empty" },
    }
  },
  description: Sequelize.TEXT
})

module.exports = Designation;