const mongoose = require('mongoose')


const connection = async () => {
    mongoose.set({
        strictQuery: false
    })
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("Database connected successfully...")
    }
    catch (error) {
        console.log("Database didn't connected..",error)
    }
}


module.exports = connection