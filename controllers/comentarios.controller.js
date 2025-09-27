import * as comentariosService from "../services/comentarios.services.js";
import * as service from "../services/productos.services.js";
import * as views from "../views/comentarios.views.js";


export async function getComentariosProducto(req, res) {
  const { idProducto } = req.params;
  const comentarios = await comentariosService.getComentariosByProducto(idProducto);
  res.send(views.comentariosList(comentarios, idProducto));
}


export function formularioNuevo(req, res) {
  const { idProducto } = req.params;
  res.send(views.formularioNuevoComentario(idProducto));
}


export async function postComentario(req, res) {
  const { idProducto } = req.params;
  await comentariosService.createComentario(idProducto, req.body);
  res.redirect(`/productos/${idProducto}`);
}


export async function formularioBorrar(req, res) {
  const { idProducto, idComentario } = req.params;
  const comentarios = await comentariosService.getComentariosByProducto(idProducto);
  const comentario = comentarios.find(c => c._id.toString() === idComentario);
  if (!comentario) return res.send("Comentario no encontrado");
  res.send(views.formularioBorrarComentario(idProducto, comentario));
}


export async function postBorrarComentario(req, res) {
  const { idProducto, idComentario } = req.params;
  await comentariosService.deleteComentario(idComentario);
  res.redirect(`/productos/${idProducto}`);
}


export async function formularioEditar(req, res) {
  const { idProducto, idComentario } = req.params; 
  const comentario = await comentariosService.getComentarioById(idComentario); 
  if (!comentario) return res.send("Comentario no encontrado");
  
  res.send(views.formularioEditarComentario(idProducto, comentario)); 
}


export async function postEditarComentario(req, res) {
  const { idProducto, idComentario } = req.params;
  await comentariosService.updateComentario(idComentario, req.body); 
  
  res.redirect(`/productos/${idProducto}`); 
}

export async function getComentariosAgrupados(req, res) {
    try {
        const comentarios = await comentariosService.getComentarios();
        const productoIds = [...new Set(comentarios.map(c => c.productoId.toString()))];
        const productos = await service.getProductosByIds(productoIds); 
        const productoMap = productos.reduce((map, p) => {
            map[p._id.toString()] = { 
                nombre: p.nombre, 
                imagen: p.imagen 
            };
            return map;
        }, {});

        
        const comentariosConDatos = comentarios.map(c => {
            const productoData = productoMap[c.productoId.toString()] || { nombre: "Producto no encontrado", imagen: "" };
            return {
                ...c,
                productoNombre: productoData.nombre, 
                productoImagen: productoData.imagen
            };
        });

        res.send(views.createAllComentariosPage(comentariosConDatos));
        
    } catch (error) {
        res.status(500).send("Error al obtener los comentarios: " + error.message);
    }
}