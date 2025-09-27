import express from "express";
import * as controllers from "../controllers/productos.api.controller.js";
import comentariosRouter from "./comentarios.api.routes.js";

const route = express.Router();

route.get("/", controllers.getProductos);
route.get("/:id", controllers.getProductoById);
route.post("/", controllers.createProduct);
route.delete("/:id", controllers.deleteProduct);
route.put("/:id", controllers.reemplazarProduct);
route.patch("/:id", controllers.actualizarProduct);

route.use("/:idProducto/comentarios", comentariosRouter);


export default route;
