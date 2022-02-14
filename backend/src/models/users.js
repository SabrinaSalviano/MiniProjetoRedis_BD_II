const Sequelize = require('sequelize');
const postgres = require('../databases/db_postgres');

const Users = postgres.define('users', {
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    }
});

module.exports = Users;