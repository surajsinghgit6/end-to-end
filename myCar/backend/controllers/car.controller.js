const {
    Car
} = require('../models/car.model.js');

const getCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        if (!cars) {
            res.json({
                message: "Car not found",
                data: '',
                status: 400
            });
            return;
        }
        res.json({
            message: "Cars found",
            data: cars,
            status: 200
        });
    } catch (error) {
        res.send(error)
        res.json({
            message: 'Oops! Something went wrong',
            data: [],
            status: 500
        })
    }
}

const postCars = async (req, res) => {
    user = new Car(req.body);
    try {
        const car = await user.save();
        if (!car) {
            res.json({
                message: "Car not saved",
                data: '',
                status: 400
            });
            return;
        }
        res.json({
            message: "Car saved",
            data: '',
            status: 200
        });
    } catch (error) {
        res.send(error)
        res.json({
            message: 'Oops! Something went wrong',
            data: [],
            status: 500
        });
    }
}

const putCars = async (req, res) => {
    try {
        const query = {
            _id: req.params.id
        }
        const newquery = {
            $set: {
                carName: req.body.carName,
                carBrand: req.body.carBrand,
                noOfWheels: req.body.noOfWheels,
                carTransmission: req.body.carTransmission
            }
        };
        const car = await Car.findOneAndUpdate(query, newquery);

        if (!car) {
            res.json({
                message: 'car details not updated',
                data: '',
                status: 400
            });
            return;
        }
        res.json({
            message: "carr updated",
            data: '',
            status: 200
        });
    } catch (error) {
        res.send(error)
        res.json({
            message: 'Oops! Something went wrong',
            data: [],
            status: 500
        });
    }
}

const deleteCars = async (req, res) => {
    try {
        const query = {
            _id: req.params.id
        };
        const car = await Car.findOneAndDelete(query);

        if (!car) {
            res.json({
                message: 'Player not deleted',
                data: '',
                status: 400
            });
            return;
        }
        res.json({
            message: "Player deleted",
            data: '',
            status: 200
        });
    } catch (error) {
        res.send(error)
        res.json({
            message: 'Oops! Something went wrong',
            data: [],
            status: 500
        });
    }
}

module.exports = {
    getCars,
    postCars,
    putCars,
    deleteCars
};