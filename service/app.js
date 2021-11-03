const Koa = require("koa")
const Router = require("koa-router")
const cors = require('koa2-cors');
const parameter = require("koa-parameter")
const koaBody = require("koa-body")
const path = require('path')
const staticFiles = require('koa-static')

const app = new Koa()
const router = new Router()
//引入api文件
const poetry = require('./routers/poetryRouter')
// const centers = require('./routers/centerRouter')
const nav = require('./routers/navbar')
const banner = require('./routers/banner')
const bannersub = require('./routers/bannersub')
const detail = require('./routers/detailRouter')
const story = require('./routers/storyRouter')
const center = require('./routers/centerRouter')
const news = require('./routers/newsRouter')
    // 装载所有子路由

router.use('/poetry', poetry.routes())
router.use('/detail', detail.routes())
router.use('/story', story.routes())
router.use('/center', center.routes())
router.use('/news', news.routes())
// router.use('/poetry/getPoetry', poetry.routes())
router.use('/nav', nav.routes())
router.use('/banner', banner.routes())
router.use('/bannersub', bannersub.routes())
app.use(staticFiles(path.join(__dirname + '/static/')))


// center.save((err, res)=> {
//     if(err) console.log(err)
//     console.log(res)
// })
app.use(cors());
app.use(
    koaBody({
        multipart: true
    })
)
router.get('/',async ctx=>{
    ctx.body="hello World111";
  })
app.use(parameter(app))
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=> {
    console.log('服务启动了')
})
console.log("Server start!")
