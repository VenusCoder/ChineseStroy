//模型的增删改查
const PoetryModel = require("../../schema/poetryschema/poetryschema")
const baseURL='http://localhost:3000'

const poetry = new PoetryModel({

    "poetry": 
        [{name: '李白',
            title: '静夜思',
            id: 1,
            content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
            img: baseURL+ '/image/花儿.jpg'
    }, {
            name: '杜甫',
            title: '望岳',
            id: 1,
            content: '岱宗夫如何，齐鲁青未了。造化钟神秀，阴阳割昏晓。',
            img:baseURL+ '/image/花儿.jpg'
        }],
       
 

  
   

})
// poetry.save()

class PoetryController {
    // async getCenter(ctx) {
    //     const data = await PoetryModel.find()
    //     const result = {
    //         code: 200,
    //         data
    //     }

    //     ctx.body = result
    // }

    async getPoetry(ctx) {
        const data = await PoetryModel.find(
            //     [{
            //     $unwind : '$center.poetry' 
            // }]
        )
        console.log(data,'888')
        const result = {
            code: 200,
            data
        }
        ctx.body = result
    }
    // //获取导航栏
    // async getNav(ctx) {
    //     const data = await User.find()
    //     const result = {
    //         code:200,
    //         data
    //     }
    //     ctx.body = result
    // }
    // async getUserById(ctx){
    //     const data = await User.findOne({
    //         _id: ctx.params.id
    //     })
    //     if (!data) {
    //         ctx.throw(404, "用户不存在")
    //     }
    //     const result = {
    //         code:200,
    //         data
    //     }
    //     ctx.body = result
    // }
    // async updateUser(ctx){
    //     ctx.verifyParams({
    //         name: { type: "string" },
    //         sex: { type: "string" },
    //         phone: { type:"string" }
    //     })
    //     const data = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    //     if(!data){
    //         ctx.throw(404, "用户不存在")
    //     }
    //     const result = {
    //         code: 200,
    //         data
    //     }
    //     ctx.body = result
    // }
    // async createUser(ctx){
    //     ctx.verifyParams({
    //         name: { type: "string", required: true},
    //         sex: { type: "string", required: true},
    //         phone: { type: "string", required: true}
    //     })
    //     const data = await new User(ctx.request.body).save()
    //     const result = {
    //         code: 200,
    //         data
    //     }
    //     ctx.body = result
    // }
    // async deleteUser(ctx){
    //     const data = await User.findByIdAndRemove(ctx.params.id)
    //     if(!data){
    //         ctx.throw(404, "用户不存在")
    //     }
    //     const result = {
    //         code: 200,
    //         data
    //     }
    //     ctx.body = result
    // }
}
module.exports = new PoetryController()
