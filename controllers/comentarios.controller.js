import * as service from "../services/comentarios.services.js";
import * as views from "../views/comentarios.views.js";

// Mostrar comentarios de un producto
export async function getComentariosProducto(req, res) {
  const { idProducto } = req.params;
  const comentarios = await service.getComentariosByProducto(idProducto);
  res.send(views.comentariosList(comentarios, idProducto));
}

// Formulario para crear comentario
export function formularioNuevo(req, res) {
  const { idProducto } = req.params;
  res.send(views.formularioNuevoComentario(idProducto));
}

// Crear comentario
export async function postComentario(req, res) {
  const { idProducto } = req.params;
  await service.createComentario(idProducto, req.body);
  res.redirect(`/productos/${idProducto}`);
}

// // Formulario para editar comentario
// export async function formularioEditar(req, res) {
//   const { idProducto, idComentario } = req.params;
//   const comentarios = await service.getComentariosByProducto(idProducto);
//   const comentario = comentarios.find(c => c._id.toString() === idComentario);
//   if (!comentario) return res.send("Comentario no encontrado");
//   res.send(views.formularioEditarComentario(idProducto, comentario));
// }

// // Guardar cambios de comentario
// export async function postEditarComentario(req, res) {
//   const { idProducto, idComentario } = req.params;
//   await service.updateComentario(idComentario, req.body);
//   res.redirect(`/productos/${idProducto}`);
// }

// Formulario para confirmar borrado
export async function formularioBorrar(req, res) {
  const { idProducto, idComentario } = req.params;
  const comentarios = await service.getComentariosByProducto(idProducto);
  const comentario = comentarios.find(c => c._id.toString() === idComentario);
  if (!comentario) return res.send("Comentario no encontrado");
  res.send(views.formularioBorrarComentario(idProducto, comentario));
}

// Borrar comentario
export async function postBorrarComentario(req, res) {
  const { idProducto, idComentario } = req.params;
  await service.deleteComentario(idComentario);
  res.redirect(`/productos/${idProducto}`);
}

// ... dentro de comentarios.controller.js

// Formulario para editar comentario
export async function formularioEditar(req, res) {
  // Ahora obtienes ambos IDs del objeto params
  const { idProducto, idComentario } = req.params; 
  
  // Asume que tienes una función para obtener un solo comentario por su ID
  const comentario = await service.getComentarioById(idComentario); // 🛑 NOTA: Asume que getComentarioById existe
  
  if (!comentario) return res.send("Comentario no encontrado");
  
  // Debes pasar ambos IDs a la vista para que el formulario sepa a dónde enviar el POST
  res.send(views.formularioEditarComentario(idProducto, comentario)); 
}

// Guardar cambios de comentario
export async function postEditarComentario(req, res) {
  const { idProducto, idComentario } = req.params;
  
  // Llama al service usando idComentario
  await service.updateComentario(idComentario, req.body); 
  
  // Redirecciona de vuelta al detalle del producto
  res.redirect(`/productos/${idProducto}`); 
}

// ... lo mismo aplica para formularioBorrar y postBorrarComentario

export async function getComentariosAgrupados(req, res) {
    try {
        // Llama al servicio que trae TODOS los comentarios
        const comentarios = await service.getComentarios(); 
        
        // Renderiza la vista con los datos
        res.send(views.createAllComentariosPage(comentarios));
    } catch (error) {
        res.status(500).send("Error al obtener los comentarios: " + error.message);
    }
}