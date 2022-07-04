const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('CowList', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

const Cow = sequelize.define('Cow', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
})

Cow.sync().then(console.log('Table updated!'))