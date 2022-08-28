require("dotenv").config()

const express = require('express');

const db = require("./models/index.js");

const app = express()
app.use(express.json())


const router = require("./routes/index.js")


app.use("/", router)

app.listen(6000, () => {
    console.log("succesfully connected")
})

