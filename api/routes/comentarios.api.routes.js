import express from "express";
import * as controllers from "../controllers/comentarios.api.controller.js";

const router = express.Router({ mergeParams: true });

router.get("/", controllers.getComentariosByProducto);
router.post("/", controllers.createComentario);
router.put("/:id", controllers.updateComentario);
router.delete("/:id", controllers.deleteComentario);
router.patch("/:id", controllers.updateComentario);

export default router;
