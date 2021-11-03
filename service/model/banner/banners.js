//模型的增删改查
const Banner = require("../../schema/home/banner/banner")

const baseURL="http://120.24.37.75:3000"

const  banners=new Banner({
   bannerName:[baseURL+'/image/lishi.jpg',baseURL+'/image/piyingxi.jpg',baseURL+'/image/cunluo.png']

})
// banners.save((err,res)=> {
//     if(err){
//         console.log(err)
//     }
//     console.log(res)
// })

class BannerController{
    
    //获取导航栏
    async getBanner(ctx) {
        const data = await Banner.find()
        const result = {
            code:200,
            data
        }
        ctx.body = result
    }
   
}
module.exports = new BannerController()
