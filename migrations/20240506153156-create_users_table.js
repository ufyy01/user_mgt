'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
    {  
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
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

