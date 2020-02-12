const routes = require('express').Router();
const { User } = require('./app/models');

User.create({
    name: "Domingos",
    email: "domliraa@gmail.com",
    password_hash: "1231231241241243"
});

module.exports = routes;