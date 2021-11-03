//模型的增删改查
const Nav = require("../../schema/home/navschema/navschema")


// const users = new UserModel({  
//     name: '李白',
// sex: '男',
// id: 1,
// poemer: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
// img: '/image/1.jpeg'
// })
const  navs=new Nav({
   navName:['首页','古诗词','人物','故事','历史','新闻资讯','关于我们']

})
// navs.save()

class NavController{
    
    //获取导航栏
    async getNav(ctx) {
        const data = await Nav.find()
        const result = {
            code:200,
            data
        }
        ctx.body = result
    }
   
}
module.exports = new NavController()
