const mongoose = require("../../db/db")

const PoetrySchema = mongoose.Schema({

    poetry: [{
        name: String,
        title: String,
        id: String,
        content: String,
        img: String,

    }
       
    ]
   


})



module.exports = mongoose.model("Poetry", PoetrySchema, 'poetry')