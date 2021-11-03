const Router = require("koa-router")
const PoetryController = require("../model/poetry/poetry")
const router = new Router()
// router.get("/", PoetryController.getCenter)
router.get("/", PoetryController.getPoetry)
// router.get("/:id", UserController.getUserById)
// router.post("/create", UserController.createUser)
// router.post("/update/:id", UserController.updateUser)
// router.get("/delete/:id", UserController.deleteUser)

module.exports = router
