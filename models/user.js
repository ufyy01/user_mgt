const Sequelize = require('sequelize')
const db = require('./index')


module.exports = db.define('user', {
    id: {
        type:Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    username: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    phone: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    role: {
        type:Sequelize.STRING,
        allowNull:false,
    }
})