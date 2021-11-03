const mongoose = require("../../../db/db")



const NavSchema = mongoose.Schema({
   navName: {
       type: Array,
       require: true
   }
  
})

module.exports = mongoose.model("Nav", NavSchema,'navs')