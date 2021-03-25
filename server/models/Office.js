const Sequelize = require('sequelize');
const {sequelize} = require('../config/db');

const Office = sequelize.define('office', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name can not be null" }, 
      notEmpty: { msg: "Name can not be empty" },
    }
  },
  address: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Office;