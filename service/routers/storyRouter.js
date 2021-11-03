const Router = require("koa-router")
const StoryController = require("../model/story/story")
const router = new Router()
// router.get("/", PoetryController.getCenter)
router.get("/", StoryController.getStory)
// router.get("/:id", UserController.getUserById)
// router.post("/create", UserController.createUser)
// router.post("/update/:id", UserController.updateUser)
// router.get("/delete/:id", UserController.deleteUser)

module.exports = router
