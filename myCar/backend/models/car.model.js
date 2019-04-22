const { mongoose } = require('../db/mongoose-config');
const carSchema = mongoose.Schema({
    carName: {
        type: String
    },
    carBrand: {
        type: String
    },
    noOfWheels: {
        type: Number
    },
    carTransmission: {
        type: String
    }
});

const Car = mongoose.model("cars", carSchema) //?car is collection name
module.exports = {
    Car
}