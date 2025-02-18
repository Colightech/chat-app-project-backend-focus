const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

// Cross Origin
app.use(cors())

// ALL API Endpoint Routes
app.use("/api", router)


// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Error :", err.stack)
    res.status(500).json({ message : "Something went Wrong", error: err.message})
})

module.exports = app