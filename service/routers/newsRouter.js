const Router = require("koa-router")
const NewsController = require("../model/news/news")
const router = new Router()
// router.get("/", PoetryController.getCenter)
router.get("/", NewsController.getNews)
// router.get("/:id", UserController.getUserById)
// router.post("/create", UserController.createUser)
// router.post("/update/:id", UserController.updateUser)
// router.get("/delete/:id", UserController.deleteUser)

module.exports = router