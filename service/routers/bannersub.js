const Router = require("koa-router")
const BannersubController = require("../model/bannersub/bannersub")
const router = new Router()
router.get("/", BannersubController.getBannersub)

module.exports = router