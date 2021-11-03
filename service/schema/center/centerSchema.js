const mongoose = require("../../db/db")
const CenterSchema = mongoose.Schema({
    poetry: [
        {
            name: String,
            title: String,
            time: String,
            content: String,
            id: String,
           
            img: String,
        }
    ],
    story: [

        {
            name: String,
            title:String,
            time: String,
            content: String,
            id: String,
           
            img: String,
        }
    ],
    statusCode: String,
    desc: String,
})
module.exports = mongoose.model("Center", CenterSchema, 'center')