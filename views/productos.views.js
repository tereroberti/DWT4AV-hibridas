import { createPage } from "../pages/utils.js";
import { comentariosList } from "./comentarios.views.js";


export function createProductosListPage(productos) {
    let html = `
    
    <div style="display: flex; gap: 25px; max-width: 1200px; margin: 0 auto; padding: 20px;">

        <aside style="
            width: 250px; 
            min-width: 250px; 
            padding: 20px; 
            background-color: #f8f9fa; 
            border-radius: 12px; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
            height: fit-content; /* Se ajusta a su contenido */
        ">
            <h3 style="color: #343a40; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                🔎 Filtrar Catálogo
            </h3>
            
            <form method="GET" action="/productos" style="display: flex; flex-direction: column; gap: 15px;">
                
                <div style="display: flex; flex-direction: column;">
                    <label for="mayorQue" style="font-weight: bold; color: #495057; margin-bottom: 5px; font-size: 0.9em;">Precio Mínimo ($):</label>
                    <input 
                        type="number" 
                        name="mayorQue" 
                        id="mayorQue" 
                        placeholder="Ej. 10"
                        style="padding: 8px; border: 1px solid #ced4da; border-radius: 6px; font-size: 1em;"
                    >
                </div>

                <div style="display: flex; flex-direction: column;">
                    <label for="menorQue" style="font-weight: bold; color: #495057; margin-bottom: 5px; font-size: 0.9em;">Precio Máximo ($):</label>
                    <input 
                        type="number" 
                        name="menorQue" 
                        id="menorQue" 
                        placeholder="Ej. 100"
                        style="padding: 8px; border: 1px solid #ced4da; border-radius: 6px; font-size: 1em;"
                    >
                </div>

                <button 
                    type="submit" 
                    style="background-color: #28a745; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: bold; cursor: pointer; transition: background-color 0.3s;"
                    onmouseover="this.style.backgroundColor='#1e7e34'"
                    onmouseout="this.style.backgroundColor='#28a745'"
                >
                    Aplicar Filtros
                </button>
            </form>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e9ecef;">

            <a href="/productos/nuevo" 
                style="display: block; text-align: center; text-decoration: none; color: white; background: #007bff; padding: 10px; border-radius: 6px; font-weight: bold; transition: background 0.3s;"
                onmouseover="this.style.backgroundColor='#0056b3'"
                onmouseout="this.style.backgroundColor='#007bff'"
            >
                ➕ Nuevo Producto
            </a> 

        </aside>

        <main style="flex-grow: 1; display: flex; flex-wrap: wrap; gap: 20px;">
    `;

    productos.forEach(p => {
        html += `
            <div style="
                border: none; /* Quitamos el borde duro */
                border-radius: 12px; 
                width: 250px; 
                padding: 0; 
                box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Sombra más suave y profunda */
                background: #fff; 
                text-align: left; /* Alineamos a la izquierda para un look más moderno */
                overflow: hidden; /* Oculta partes de la imagen que sobresalgan */
                transition: transform 0.3s;
            "
            onmouseover="this.style.transform='translateY(-5px)'"
            onmouseout="this.style.transform='translateY(0)'"
            >
                
                <img src="/${p.imagen}" alt="${p.nombre}" 
                    style="width: 100%; height: 160px; object-fit: cover; margin-bottom: 10px; display: block;">
                
                <div style="padding: 15px;">
                    <h3 style="font-size: 1.1em; color: #333; margin: 0 0 5px 0;">${p.nombre}</h3>
                    <p style="font-size: 0.85em; color: #6c757d; margin: 0 0 10px 0; text-transform: uppercase;">${p.categoria}</p>
                    <p style="font-size: 1.2em; color: #dc3545; font-weight: bold; margin: 0 0 15px 0;">$${p.precio}</p>
                    
                    <a href="/productos/${p._id}" 
                        style="display: block; text-align: center; text-decoration: none; color: white; background: #007bff; padding: 10px 0; border-radius: 6px; font-size: 1em; font-weight: bold; transition: background 0.3s;"
                        onmouseover="this.style.backgroundColor='#0056b3'"
                        onmouseout="this.style.backgroundColor='#007bff'"
                    >
                        Ver Detalle
                    </a>
                </div>
            </div>
        `;
    });

    html += `
        </main>
    </div>
    `;
    return createPage("Catálogo de Productos", html);
}

export function createDetailPage(producto, comentarios = []) {
    let html = `
    
    <div style="max-width: 900px; margin: 40px auto; background: #fff; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15); overflow: hidden;">

        <div style="display: flex; flex-wrap: wrap; padding: 30px;">
            
            <div style="flex: 1 1 40%; max-width: 200px; padding-right: 30px;">
                <img src="/${producto.imagen}" alt="${producto.nombre}" 
                    style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            </div>

            <div style="flex: 1 1 60%; min-width: 300px;">
                <h1 style="font-size: 2.2em; color: #333; margin-top: 0; border-bottom: 2px solid #e9ecef; padding-bottom: 10px;">
                    ${producto.nombre}
                </h1>
                
                <p style="font-size: 1.1em; color: #6c757d; margin: 15px 0;">
                    <strong style="color: #333;">Categoría:</strong> ${producto.categoria}
                </p>

                <p style="font-size: 1.4em; color: #dc3545; font-weight: bold; margin: 20px 0;">
                    Precio: $${producto.precio}
                </p>
                
                <h3 style="font-size: 1.2em; color: #333; margin-top: 25px; border-bottom: 1px solid #e9ecef; padding-bottom: 5px;">Descripción</h3>
                <p style="font-size: 1em; color: #495057; line-height: 1.6;">${producto.descripcion}</p>
                
                <div style="margin-top: 30px; display: flex; gap: 15px;">
                    <a href="/productos" 
                        style="text-decoration: none; color: white; background: #6c757d; padding: 10px 20px; border-radius: 6px; font-weight: bold; transition: background 0.3s;"
                        onmouseover="this.style.backgroundColor='#5a6268'"
                        onmouseout="this.style.backgroundColor='#6c757d'"
                    >
                        ⬅ Volver al Catálogo
                    </a>
                    <a href="/productos/editar/${producto._id}" 
                        style="text-decoration: none; color: #333; background: #ffc107; padding: 10px 20px; border-radius: 6px; font-weight: bold; transition: background 0.3s;"
                        onmouseover="this.style.backgroundColor='#e0a800'"
                        onmouseout="this.style.backgroundColor='#ffc107'"
                    >
                        ✏️ Editar
                    </a> 
                    <a href="/productos/borrar/${producto._id}" 
                        style="text-decoration: none; color: white; background: #dc3545; padding: 10px 20px; border-radius: 6px; font-weight: bold; transition: background 0.3s;"
                        onmouseover="this.style.backgroundColor='#c82333'"
                        onmouseout="this.style.backgroundColor='#dc3545'"
                    >
                        🗑️ Borrar
                    </a>
                </div>
            </div>
        </div>
        
    </div>
    
    <div style="max-width: 900px; margin: 40px auto;">
        
        <h2 style="text-align: center; color: #343a40; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f8f9fa;">
            Opiniones de Clientes (${comentarios.length})
        </h2>
        
        <div style="text-align: center; margin-bottom: 25px;">
             <a href="/comentarios/agrupados" 
                style="color: #007bff; text-decoration: none; font-weight: bold; border-bottom: 1px dashed #007bff;"
            >
                Ver todas las reseñas agrupadas por usuario
            </a>
        </div>
        
        ${comentariosList(comentarios, producto._id)}

        <hr style="margin: 40px 0; border: 0; border-top: 1px solid #e9ecef;">
        
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="padding: 25px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
                <h4 style="text-align: center; color: #333333; font-size: 1.2em; margin-bottom: 20px; border-bottom: 2px solid #007bff; display: inline-block; padding-bottom: 5px;">
                    💬 Deja tu Comentario
                </h4>
                <form action="/api/productos/${producto._id}/comentarios" method="POST" style="display: flex; flex-direction: column; gap: 15px;">
                    
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Tu Correo Electrónico (Necesario)" 
                      required 
                      style="padding: 12px; border: 1px solid #cccccc; border-radius: 6px; font-size: 1em; transition: border-color 0.3s;"
                      onfocus="this.style.borderColor='#007bff'" 
                      onblur="this.style.borderColor='#cccccc'"
                    />
                    
                    <textarea 
                      name="comentario" 
                      placeholder="Escribe tu comentario..." 
                      required 
                      rows="5" 
                      style="padding: 12px; border: 1px solid #cccccc; border-radius: 6px; font-size: 1em; resize: vertical; transition: border-color 0.3s;"
                      onfocus="this.style.borderColor='#007bff'" 
                      onblur="this.style.borderColor='#cccccc'"
                    ></textarea>
                    
                    <button 
                      type="submit" 
                      style="background-color: #007bff; color: white; border: none; padding: 12px 20px; border-radius: 6px; font-size: 1em; font-weight: bold; cursor: pointer; transition: background-color 0.3s, transform 0.1s;"
                      onmouseover="this.style.backgroundColor='#0056b3'"
                      onmouseout="this.style.backgroundColor='#007bff'"
                      onclick="this.style.transform='scale(0.98)'"
                      onblur="this.style.transform='scale(1)'"
                    >
                      Comentar y Enviar
                    </button>
                </form>
            </div>
        </div>
        
    </div>
    
    `;
    return createPage(producto.nombre, html);
}


export function formularioNuevoProducto() {
  let html = `
    <div style="max-width: 600px; margin: 30px auto; padding: 20px; border: 1px solid #ccc; border-radius: 12px; box-shadow: 2px 2px 12px rgba(0,0,0,0.1); background: #fff;">
      <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px; color: #333;">Crear Nuevo Producto</h2>

      <form action="/productos/nuevo" method="post" style="display: flex; flex-direction: column; gap: 15px;">
        
        <input type="text" name="nombre" placeholder="Nombre del producto" 
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;" required />

        <input type="text" name="imagen" placeholder="URL de la imagen" 
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 15px;" required />

        <input type="number" name="precio" placeholder="Precio" 
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;" required />

          <label for="categoria">Categoría:</label>
          <select name="categoria" id="categoria">
            <option value="">Todas</option>
            <option value="Bolsones">Bolsones</option>
            <option value="Almacen">Almacén</option>
            <option value="Fresco">Fresco</option>
          </select>

        <textarea name="descripcion" placeholder="Descripción" rows="4"
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 15px; resize: vertical;" required></textarea>
        
        <button type="submit" 
          style="background: #28a745; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 16px; cursor: pointer; transition: background 0.3s;">
          Guardar Producto
        </button>
      </form>

      <div style="text-align: center; margin-top: 20px;">
        <a href="/productos" 
          style="text-decoration: none; color: white; background: #007bff; padding: 10px 20px; border-radius: 6px; font-size: 16px;">
          ⬅ Volver
        </a>
      </div>
    </div>
  `;
  return createPage("Nuevo producto", html);
}

export function formularioEditarProducto(producto) {
  let html = `
    <div style="max-width: 600px; margin: 30px auto; padding: 20px; border: 1px solid #ccc; border-radius: 12px; box-shadow: 2px 2px 12px rgba(0,0,0,0.1); background: #fff;">
      <h2 style="text-align: center; font-size: 24px; margin-bottom: 20px; color: #333;">Editar Producto</h2>

      <form action="/productos/editar/${producto._id}" method="post" style="display: flex; flex-direction: column; gap: 15px;">
        
        <input type="text" name="nombre" placeholder="Nombre del producto" value="${producto.nombre}"
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;" required />

        <input type="text" name="imagen" placeholder="URL de la imagen" value="${producto.imagen}"
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 15px;" required />

        <input type="number" name="precio" placeholder="Precio" value="${producto.precio}"
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;" required />

                    <label for="categoria">Categoría:</label>
          <select name="categoria" id="categoria" value="${producto.categoria} style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px;" required>
            <option value="">Todas</option>
            <option value="Bolsones">Bolsones</option>
            <option value="Almacen">Almacén</option>
            <option value="Fresco">Fresco</option>
          </select>
          
        <textarea name="descripcion" placeholder="Descripción" rows="4"
          style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 15px; resize: vertical;" required>${producto.descripcion}</textarea>
        
        <button type="submit" 
          style="background: #ffc107; color: #333; border: none; padding: 12px; border-radius: 8px; font-size: 16px; cursor: pointer; transition: background 0.3s;">
          Guardar Cambios
        </button>
      </form>

      <div style="text-align: center; margin-top: 20px;">
        <a href="/productos" 
          style="text-decoration: none; color: white; background: #007bff; padding: 10px 20px; border-radius: 6px; font-size: 16px;">
          ⬅ Volver
        </a>
      </div>
    </div>
  `;
  return createPage("Editar producto", html);
}


export function formularioBorrarProducto(producto) {
  let html = `
    <div style="max-width: 500px; margin: 30px auto; padding: 20px; border: 2px solid #dc3545; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); background: #fff;">
      <h2 style="text-align:center; color:#dc3545;">⚠️ Confirmar Borrado</h2>
      <p style="text-align:center; color:#333;">nombre: ${producto.nombre}</p>
      <p style="text-align:center; color:#333;">descripcion: ${producto.descripcion}</p>
      <p style="text-align:center; color:#28a745; font-weight:bold;">$${producto.precio}</p>
      <form action='/productos/borrar/${producto._id}' method='post' style="text-align:center;">
        <button type='submit' 
          style="padding:10px 15px; border:none; border-radius:6px; background:#dc3545; color:white; font-size:16px; cursor:pointer;">
          Sí, borrar
        </button>
      </form>
      <div style="text-align:center; margin-top:15px;">
        <a href="/productos" style="text-decoration:none; color:white; background:#6c757d; padding:8px 12px; border-radius:5px;">⬅ Cancelar</a>
      </div>
    </div>
  `;
  return createPage("Borrar producto", html);
}

// ✅ Mensaje de éxito al borrar
// export function borrarExito(id) {
//   let html = `
//     <p>Producto borrado correctamente</p>
//     <a href="/productos" style="text-decoration:none; color:white; background:#007bff; padding:8px 12px; border-radius:5px;">Volver</a>
//   `;
//   return createPage("Producto borrado correctamente", html);
// }
export function borrarExito(id) {
    let html = `
    <div style="
        max-width: 400px; 
        margin: 60px auto; 
        padding: 30px; 
        border-radius: 10px; 
        background-color: #f0fdf4; /* Verde muy claro para simplicidad */
        border: 2px solid #10b981; /* Borde verde sólido */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        text-align: center;
        font-family: sans-serif;
    ">
        <h2 style="
            color: #10b981; /* Verde de éxito */
            font-size: 1.8em; 
            margin-bottom: 10px;
        ">
            ✔️ ¡Producto Eliminado!
        </h2>
        
        <p style="
            color: #4b5563; 
            font-size: 1em; 
            margin-bottom: 20px;
        ">
            El producto ha sido eliminado.
        </p>
        
        <a href="/productos" 
            style="
                display: inline-block; 
                text-decoration: none; 
                color: white; 
                background: #10b981; /* Botón verde */
                padding: 10px 20px; 
                border-radius: 5px; 
                font-weight: bold;
                transition: background-color 0.3s;
            "
            onmouseover="this.style.backgroundColor='#059669'"
            onmouseout="this.style.backgroundColor='#10b981'"
        >
            Volver al Catálogo ⬅️
        </a>
    </div>
    `;
    return createPage("Operación Exitosa", html);
}