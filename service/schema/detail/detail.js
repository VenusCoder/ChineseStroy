const mongoose = require("../../db/db")

const DetailSchema = mongoose.Schema({

    detail:[{
        title: String,
        author: String,
        time: String,
        content: String,
        zhushi:String,
        jieshi:String,
       
        id: String,
        bigTitle: String,
        img: Array,
    }

    ]
   



    // people: [{
    //     name: String,
    //     sex: String,
    //     id: String,
    //     poemer: String,
    //     img: String,
    // }],
    // history: [{
    //     name: String,
    //     time: String,
    //     id: String,
    //     poemer: String,
    //     img: String,
    // }],
    // star: [{
    //     name: String,
    //     sex: String,
    //     id: String,
    //     poemer: String,
    //     img: String,
    // }],
    // column: [{
    //     name: String,
    //     sex: String,
    //     id: String,
    //     poemer: String,
    //     img: String,

    // }],





})



module.exports = mongoose.model("Detail", DetailSchema, 'detail')