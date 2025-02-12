const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)

        mongoose.connection.once("open", () => {
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