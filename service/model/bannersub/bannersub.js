//模型的增删改查
const Bannersub = require("../../schema/bannersub/bannersub")

const baseURL="http://120.24.37.75:3000"

const  bannersub=new Bannersub({
   bannersubName:[baseURL+'/image/poetry/gushici.jpg' ]

})
// bannersub.save((err,res)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(res)
// })

class BannersubController{
    
    //获取导航栏
    async getBannersub(ctx) {
        const data = await Bannersub.find()
        const result = {
            code:200,
            data
        }
        ctx.body = result
    }
   
}
module.exports = new BannersubController()
