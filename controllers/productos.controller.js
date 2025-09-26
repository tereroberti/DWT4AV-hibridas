import * as service from "../services/productos.services.js";
import * as views from "../views/productos.views.js";
import * as comentariosService from "../services/comentarios.services.js";

export async function getProductoById(req, res) {
  try {
    const { id } = req.params;

    const producto = await service.getProductoById(id);
    if (!producto) {
      return res.send(views.errorPage());
    }

    const comentarios = await comentariosService.getComentariosByProducto(producto._id);

    res.send(views.createDetailPage(producto, comentarios));

  } catch (error) {
    res.status(500).send("Error al obtener el producto: " + error.message);
  }
}


export async function getProductos(req, res) {
  const { categoria, mayorQue, menorQue } = req.query;

  let productos = await service.getProductos();

  if (categoria) {
    productos = productos.filter(p => p.categoria === categoria);
  }
  if (mayorQue) {
    productos = productos.filter(p => p.precio >= Number(mayorQue));
  }
  if (menorQue) {
    productos = productos.filter(p => p.precio <= Number(menorQue));
  }


  res.send(views.createProductosListPage(productos));
}


export function formularioNuevoProducto(req, res) {
  res.send(views.formularioNuevoProducto());
}


export async function guardarProducto(req, res) {
  const producto = {
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    precio: req.body.precio,
    categoria: req.body.categoria,
    descripcion: req.body.descripcion,
  };
  const productoGuardado = await service.guardarProducto(producto);
  res.send(views.createDetailPage(productoGuardado));
}



export async function formularioEditarProducto(req, res) {
  const id = req.params.id;
  
  const producto = await service.getProductoById(id);
  res.send(views.formularioEditarProducto(producto));
}

export async function editarProducto(req, res) {
  const id = req.params.id;
  
  const producto = {
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    precio: req.body.precio,
    categoria: req.body.categoria,
    descripcion: req.body.descripcion,
  };
  const productoEditado = await service.editarProducto(id, producto);
  res.send(views.createDetailPage(productoEditado));
}

export async function formularioBorrarProducto(req, res) {
  const id = req.params.id;
  
  const producto = await service.getProductoById(id);
  res.send(views.formularioBorrarProducto(producto));
}

export async function borrarProducto(req, res) {
  
  const id = req.params.id;
  await service.borrarProducto(id);
  res.send(views.borrarExito(id));
}
