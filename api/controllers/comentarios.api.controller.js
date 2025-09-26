import * as service from "../../services/comentarios.services.js";

export async function getComentarios(req, res) {
  const comentarios = await service.getComentarios();
  res.json(comentarios);
}

export async function getComentariosByProducto(req, res) {
  const idProducto = req.params.idProducto;
  const comentarios = await service.getComentariosByProducto(idProducto);
  res.json(comentarios);
}

// Crear
export async function createComentario(req, res) {
  try {
    const { idProducto } = req.params;   
    const nuevoComentario = await service.createComentario(idProducto, req.body);
    res.redirect(`/productos/${idProducto}`); 
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
}

// Editar
export async function updateComentario(req, res) {
  const id = req.params.id;
  await service.updateComentario(id, req.body);
  res.json({ message: "Comentario actualizado" });
}

// Borrar
export async function deleteComentario(req, res) {
  const id = req.params.id;
  await service.deleteComentario(id);
  res.json({ message: "Comentario eliminado" });
}
