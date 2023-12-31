const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDb")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;