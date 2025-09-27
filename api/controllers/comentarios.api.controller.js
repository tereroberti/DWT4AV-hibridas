import * as comentariosService from "../../services/comentarios.services.js";

export async function getComentarios(req, res) {
  const comentarios = await comentariosService.getComentarios();
  res.json(comentarios);
}

export async function getComentariosByProducto(req, res) {
  const idProducto = req.params.idProducto;
  const comentarios = await comentariosService.getComentariosByProducto(idProducto);
  res.json(comentarios);
}

export async function createComentario(req, res) {
  try {
    const { idProducto } = req.params;   
    const nuevoComentario = await comentariosService.createComentario(idProducto, req.body);
    res.redirect(`/productos/${idProducto}`); 
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
}

export async function updateComentario(req, res) {
  const id = req.params.id;
  await comentariosService.updateComentario(id, req.body);
  res.json({ message: "Comentario actualizado" });
}


export async function deleteComentario(req, res) {
  const id = req.params.id;
  await comentariosService.deleteComentario(id);
  res.json({ message: "Comentario eliminado" });
}
