module.exports = app => {
    const userController = require('../controllers/user.controller.js');

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/register", userController.create);


    app.use('/api', router);
}