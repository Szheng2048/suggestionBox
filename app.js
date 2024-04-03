const express = require("express")
const logger = require("morgan")
const suggestionRouter = require("./routes/suggestions/suggestionRouter")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use("/api/suggestions/",suggestionRouter)

module.exports = app