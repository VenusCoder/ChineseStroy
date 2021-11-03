//模型的增删改查
const StoryModel = require("../../schema/story/storyschema")
const baseURL='http://localhost:3000'

const story = new StoryModel({

    "story": 
        [{name: '国人暴动',
            time:'公元前841年',
            
            id: 1,
            content: '国人暴动 [1]  ，又称彘之乱、国人起义、道路以目、厉王奔彘，是公元前841年 [22]  发生在西周首都镐京（今陕西省西安市长安区西北）的以平民为主体的暴动。这里的“国人”在此为西周、春秋时对居住于国都的人的通称。 [2]  国人实际上指的是住在城里的贵族。',
            img: baseURL+ '/image/花儿.jpg'
    }, {
        name: '玄武门事变',
        time:'公元626年7月2日',
        
        id: 2,
        content: '玄武门之变，是唐高祖武德九年六月初四（公元626年7月2日），由当时唐高祖李渊次子秦王李世民在唐王朝的首都长安城（今陕西省西安）太极宫的北宫门——玄武门附近发动的一次政变。',
        img: baseURL+ '/image/花儿.jpg'
        }],
       
 

    "statusCode": "200",
    "desc": "请求成功"
   

})
// story.save()

class StoryController {
    // async getCenter(ctx) {
    //     const data = await PoetryModel.find()
    //     const result = {
    //         code: 200,
    //         data
    //     }

    //     ctx.body = result
    // }

    async getStory(ctx) {
        const req = ctx.request.body;

     
        const data = await StoryModel.find(
            //     [{
            //     $unwind : '$center.poetry' 
            // }]
        )
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
module.exports = new StoryController()
