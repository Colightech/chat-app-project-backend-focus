const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // 10 seconds timeout
            socketTimeoutMS: 45000, // 45 seconds socket timeout
        })

        mongoose.connection.on("connected", () => {
            console.log("Mongodb connected")
        })
        mongoose.connection.on("error", (error) => {
            console.log("Mongodb Connection Fail: ", error)
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}

module.exports = connectDB