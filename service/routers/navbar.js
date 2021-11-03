const Router = require("koa-router")
const NavController = require("../model/navbar/navbar")
const router = new Router()
router.get("/", NavController.getNav)

module.exports = router