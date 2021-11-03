//模型的增删改查
const CenterModel = require("../../schema/center/centerSchema")
const poetry = require("../poetry/poetry")
const baseURL = 'http://localhost:3000'

const center = new CenterModel({


    "poetry": [

        {
            name: '王勃',
            title: '滕王阁序',

            time: '620',
            id: 1,
            content: '《滕王阁序》是唐代文学家王勃创作的一篇骈文。文章由洪州的地势、人才写到宴会，写滕王阁的壮丽， 眺望的广远，扣紧秋日，景色鲜明；再从宴会娱游写到人生遇合，抒发身世之感；接着写作者的遭遇并表白要自励志节， 最后以应命赋诗和自谦之辞作结。全文表露了作者的抱负和怀才不遇的愤懑心情。文章除少数虚词以外，通篇对偶。 句法以四字句、六字句为多，对得整齐；又几乎是通篇用典，用得比较自然而恰当，显得典雅而工巧。。',
            img: baseURL + '/image/花儿.jpg'
        }
        , {
            name: '杜甫',
            title: '望岳',

            time: '708',
            id: 2,
            content: '抒发身世之感；接着写作者的遭遇并表白要自励志节， 最后以应命赋诗和自谦之辞作结。全文表露了作者的抱负和怀才不遇的愤懑心情。文章除少数虚词以外，通篇对偶。 句法以四字句、六字句为多，对得整齐；又几乎是通篇用典，用得比较自然而恰当，显得典雅而工巧。',
            img: baseURL + '/image/花儿.jpg'
        }



    ],
    "story": [

        {
            name: '国人暴动',
            title: '国人暴动',

            time: '2022',
            id: 3,
            content: '国人暴动，又称彘之乱、国人起义、道路以目、厉王奔彘，是公元前841年发生在西周首都镐京（今陕西省西安市长安区西北）的以平民为主体的暴动。这里的“国人”在此为西周、春秋',
            img: baseURL + '/image/花儿.jpg'
        }
        , {
            name: '新的数据线',

            title: '数据线',

            name: '留言',
            time: '54512',
            id: 4,
            content: '再从宴会娱游写到人生遇合，抒发身世之感；接着写作者的遭遇并表白要自励志节， 最后以应命赋诗和自谦之辞作结。全文表露了作者的抱负和怀才不遇的愤懑心情。文章除少数虚词以外，通篇对偶。 句法以四字句、六字句为多，对得整齐；又几乎是通篇用典，用得比较自然而恰当，显得典雅而工巧。',
            img: baseURL + '/image/花儿.jpg'
        }



    ]



})
// center.save()

class CenterController {
    // async getCenter(ctx) {
    //     const data = await PoetryModel.find()
    //     const result = {
    //         code: 200,
    //         data
    //     }

    //     ctx.body = result
    // }

    async getCenter(ctx) {

        console.log(ctx.request.query, '111')
        const types = ctx.request.query.type
        console.log("types:", types)//获取前端参数
        const datas = await CenterModel.find({ "poetry": { $type: 4 } })
        let data, result
        switch (types) {
            case 'poetry':

                data = datas[0].poetry
                result = {
                    code: 200,
                    // data: {
                    //     type:'poetry',
                    //     page:'2',
                    //     datas
                    // }
                    poetry:data
                }

                ctx.body = result

                break;



            case 'story':

                data = datas[0].story


                result = {
                    code: 200,
                   story: data
                }

                ctx.body = result


                break;



        };





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
module.exports = new CenterController()
