const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("connected to the database successfully ^_^ "))
        .catch((err) => console.error(err))
}
module.exports = dbConnection;
