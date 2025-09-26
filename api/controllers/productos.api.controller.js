import * as services from "../../services/productos.services.js"

export function getProductos(req, res){
    services.getProductos()
        .then( productos => res.status(200).json(productos) )
}

export function getProductoById(req, res){
    const id = req.params.id
    services.getProductoById(id)
        .then( producto => {
            if(producto){
                res.status(200).json(producto)
            }else{
                res.status(404).json({message: "Recurso no encontrado"})
            }
        } )
}

export function createProduct(req, res){
    const producto = {
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion, 
    };

    services.guardarProducto(producto)
        .then( result => {
            res.status(201).json({ 
                _id: result.insertedId, 
                ...producto 
            });
        })
        .catch( err => res.status(500).json({message: err.message}) );
}

export function deleteProduct(req, res){
    const id = req.params.id
    services.borrarProducto(id)
        .then( (idBorrado) => res.status(202).json({message: `el id:${idBorrado} se elimino correctamente.`}) )
        .catch( (err) => res.status(500).json({message: `el id:${id} NO se elimino.`}) )
}



export function reemplazarProduct(req, res){
    const id = req.params.id;
    const producto = {
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
    };

    services.editarProducto(id, producto)
        .then( () => res.status(202).json({ _id: id, ...producto }) )
        .catch( err => res.status(500).json({message: "No se pudo actualizar."}) );
}


export function actualizarProduct(req, res){
    const id = req.params.id;
    const producto = {
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        precio: req.body.precio,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
    };

    services.actualizarProducto(id, producto)
        .then( () => res.status(202).json({ _id: id, ...producto }) )
        .catch( err => res.status(500).json({message: err.message}) );
}
