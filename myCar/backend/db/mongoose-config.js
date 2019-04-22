const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/Cardata"
// mongoose.Promise = global.Promise;

const connection = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log("Database Connected")
    } catch (err) {
        console.log(err.message);
    }
}

connection();

module.exports = {
    mongoose
}