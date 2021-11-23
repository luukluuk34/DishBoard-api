const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// const db = "DishBoard";
// const url = "mongodb://localhost:27017"

async function mongo(dbName) {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${dbName}`, options)
        console.log(`connection to mongo DB ${dbName} established`)
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    mongo
}
