const mongoose = require("../../db/db")



const BannersubSchema = mongoose.Schema({
   bannersubName: {
       type: Array,
       require: true
   }
  
})

module.exports = mongoose.model("Bannersub", BannersubSchema,'bannersub')