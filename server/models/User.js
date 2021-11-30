const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Sequelize, sequelize } = require('../config/db');

const User = sequelize.define('users', {
  id: { type: Sequelize.UUID, primaryKey: true, autoIncrement: true, defaultValue: Sequelize.UUIDV4 },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name can not be null" },
      notEmpty: { msg: "Name can not be empty" },
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: { msg: "Email can not be null" },
      isEmail: { msg: "Not a valid email" }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Password can not be null" },
      notEmpty: { msg: "Password can not be empty" },
      len: {
        min: 6,
        msg: "At least 6 character long"
      }
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Email can not be null" },
      notEmpty: { msg: "Email can not be empty" },
      is: {
        args: /^(?:\+88|01)?(?:\d{11}|\d{13})$/i,
        msg: "Not a vaild phone number"
      }
    }
  },
  role: {
    type: Sequelize.ENUM,
    values: ['user', 'moderator'], // admin can only be set manually
    defaultValue: 'user'
  }
},
  {
    defaultScope: {
      attributes: {
        exclude: ['password']
      }
    }
  }
)


// Encrypt password using bcrypt
User.beforeSave(async user => {
  // console.log(user.name, user.password, user.dataValues, user._changed.password)
  if (!user._changed.password) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
})

// Sign JWT and return
User.prototype.getSignedJwtToken = function () {
  return jwt.sign({
    id: this.id,
    email: this.email,
    role: this.role
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

// Match user entered password to hashed password in database
User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = User;