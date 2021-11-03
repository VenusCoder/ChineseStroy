const Router = require("koa-router")
const CenterController = require("../model/center/centerModle")
const router = new Router()
// router.get("/", PoetryController.getCenter)
router.get("/", CenterController.getCenter)
// router.get("/:id", UserController.getUserById)
// router.post("/create", UserController.createUser)
// router.post("/update/:id", UserController.updateUser)
// router.get("/delete/:id", UserController.deleteUser)

module.exports = router
