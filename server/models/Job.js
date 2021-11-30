const Sequelize = require('sequelize');
const {sequelize} = require('../config/db');

const Job = sequelize.define('job', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name can not be null" }, 
      notEmpty: { msg: "Name can not be empty" },
    }
  },
  description: Sequelize.TEXT
})

module.exports = Job;