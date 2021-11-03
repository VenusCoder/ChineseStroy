const Router = require("koa-router")
const BannerController = require("../model/banner/banners")
const router = new Router()
router.get("/", BannerController.getBanner)

module.exports = router