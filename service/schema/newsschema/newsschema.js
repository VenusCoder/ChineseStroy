const mongoose = require("../../db/db")
const NewsSchema = mongoose.Schema({
    news: [
        {
           
            title: String,
            author:String,
            time: String,
            content: String,
            id: String,
           
            img: String,
        }
    ]
    
    
})
module.exports = mongoose.model("News", NewsSchema, 'news')