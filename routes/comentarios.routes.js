import express from "express";
import * as controller from "../controllers/comentarios.controller.js";

const route = express.Router({ mergeParams: true }); 

route.get("/:idComentario/editar", controller.formularioEditar); 
route.post("/:idComentario/editar", controller.postEditarComentario);

route.get("/:idComentario/borrar", controller.formularioBorrar); 
route.post("/:idComentario/borrar", controller.postBorrarComentario); 
route.get("/agrupados", controller.getComentariosAgrupados);

export default route;