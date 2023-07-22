const express = require('express');
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
})) 

  
app.use("/api/v1/transactions", require("./routes/transactionRouter"))


module.exports = app
