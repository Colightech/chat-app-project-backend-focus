const express = require("express");
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

// Cross Origin
app.use(cors())

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Error :", err.stack)
    res.status(500).json({ message : "Something went Wrong", error: err.message})
})

module.exports = app