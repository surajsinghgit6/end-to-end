const express = require("express");
const router = express.Router();//?Router is a function in express which consists of GET,PUT,...
const carController = require("../controllers/car.controller");

//!  http://localhost:4000/api/cars

router
    .route('/cars')
    .get(carController.getCars)
    .post(carController.postCars);

//!  http://localhost:4000/api/cars/id

router
    .route('/cars/:id')
    .put(carController.putCars)
    .delete(carController.deleteCars);


module.exports = {
    carRouter: router
}