const mongoose = require("../../../db/db")



const BannerSchema = mongoose.Schema({
   bannerName: {
       type: Array,
       require: true
   }
  
})

module.exports = mongoose.model("Banner", BannerSchema,'banners')