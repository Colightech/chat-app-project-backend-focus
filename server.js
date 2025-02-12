const port = process.env.PORT || 8000
const app = require("./app")
const connectDB = require("./config/connectDB")
require("dotenv").config()


app.get('/', (req, res) => {
    res.send(`Express App is Running on Port: ${port}`);
})


const startServer = async () => {
    try {
        await connectDB()
        console.log("Database Connected Successfully")

        app.listen(port, () => {
            console.log(`Server is Running on port: ${port}`)
        })
        
    } catch (error) {
        console.error("Database Connection Error", error)
        process.exit(1) // Exit process on database failure
        
    }
}

startServer()