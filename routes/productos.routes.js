import express from "express"
import * as controller from '../controllers/productos.controller.js'
import { getHome } from "../controllers/home.controller.js";
import comentariosRouter from './comentarios.routes.js'; 


const route = express.Router()

route.get("/", getHome);   
route.get("/productos", controller.getProductos)
route.get("/productos/nuevo", controller.formularioNuevoProducto)
route.post("/productos/nuevo", controller.guardarProducto)
route.get("/productos/editar/:id", controller.formularioEditarProducto)
route.post("/productos/editar/:id", controller.editarProducto)
route.get("/productos/borrar/:id", controller.formularioBorrarProducto)
route.post("/productos/borrar/:id", controller.borrarProducto)
route.get("/productos/:id", controller.getProductoById)
route.use("/productos/:idProducto/comentarios", comentariosRouter) 

export default route