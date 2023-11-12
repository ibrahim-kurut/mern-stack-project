const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const dbConnection = require('./config/db');


dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser())


app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to our API" });
});

const PORT = process.env.PORT || 4000

dbConnection()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} on mode ${process.env.NODE_ENV} `)
})
