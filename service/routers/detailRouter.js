const Router = require("koa-router")
const DetailController = require("../model/detail/detail")
const router = new Router()
// router.get("/", PoetryController.getCenter)
router.get("/", DetailController.getDetail)
// router.get("/:id", UserController.getUserById)
// router.post("/create", UserController.createUser)
// router.post("/update/:id", UserController.updateUser)
// router.get("/delete/:id", UserController.deleteUser)

module.exports = router
