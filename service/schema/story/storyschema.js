const mongoose = require("../../db/db")

const StorySchema = mongoose.Schema({

    story: Array,
    time:String,
    name: String,
   
    id: String,
    content: String,
    img: String,
    statusCode: String,
    desc: String,


})



module.exports = mongoose.model("Story", StorySchema, 'story')