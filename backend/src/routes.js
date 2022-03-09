const routes = require("express").Router();

const controllers = require("./app/controllers");

routes.get("/devs", controllers.DevController.index);
routes.post("/devs", controllers.DevController.store);
routes.post("/devs/:devId/likes", controllers.LikeController.store);
routes.post("/devs/:devId/dislikes", controllers.DislikeController.store);

module.exports = routes;
