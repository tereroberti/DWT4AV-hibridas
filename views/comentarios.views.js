import { createPage } from "../pages/utils.js";

export function comentariosList(comentarios, idProducto) { 
  if (!comentarios || comentarios.length === 0) {
    return `<p style="text-align:center; font-style:italic; color:#555;">No hay comentarios para este producto.</p>`;
  }

  let html = `<ul style="list-style:none; padding:0; max-width:600px; margin:20px auto;">`;

  comentarios.forEach(c => {
    html += `
      <li style="margin-bottom:15px; border:1px solid #ddd; border-radius:8px; padding:12px; background:#fafafa;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
          <img src="${c.foto || 'https://i.pravatar.cc/50'}" 
               alt="avatar" 
               style="width:40px; height:40px; border-radius:50%; object-fit:cover;">
          <strong>${c.email}</strong>
        </div>
        <p style="margin:8px 0;">${c.comentario}</p>
        <small style="color:#666;">${c.timestamp ? new Date(c.timestamp).toLocaleString() : ""}</small>
        <div style="margin-top:8px;">
          <a href="/productos/${idProducto}/comentarios/${c._id}/editar" 
             style="color:#007bff; text-decoration:none; margin-right:10px;">✏️ Editar</a>
          <a href="/productos/${idProducto}/comentarios/${c._id}/borrar" 
             style="color:#dc3545; text-decoration:none;">🗑️ Borrar</a>
        </div>
      </li>
    `;
  });

  html += `</ul>`;
  return html;
}



export function createAllComentariosPage(comentarios) {
    let html = `<h2 style="text-align:center; margin:20px 0; color:#007bff;">📌 Historial de Comentarios por Usuario</h2>`;

    // 🔑 LÓGICA DE AGRUPAMIENTO POR EMAIL
    const porEmail = {};
    comentarios.forEach(c => {
        if (!porEmail[c.email]) porEmail[c.email] = [];
        porEmail[c.email].push(c);
    });

    for (let email in porEmail) {
        // Estilo de tarjeta para cada grupo de email
        html += 
        `<div style="max-width: 700px; margin: 20px auto; padding: 15px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); background: #f9f9f9;">
                    <h3 style="color:#333; border-bottom: 2px dashed #007bff; padding-bottom: 5px; margin-bottom: 10px;">👤 ${email} (${porEmail[email].length} comentarios)</h3>
                    <ul style="list-style:none; padding-left:0;">`;

        porEmail[email].forEach(c => {
            html += 
            `<li style="margin:8px 0; padding:10px; border-left: 4px solid #28a745; border-radius: 4px; background:#fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <p style="margin: 0 0 5px 0;">"${c.comentario}"</p> 
                <small style="color:#666; display: block; margin-top: 5px;">
                    🛒 Producto: <a href="/productos/${c.productoId}" style="margin-left: 10px; color: #ff6f00; text-decoration: none; font-weight: bold;">
                        Ver Producto ↗️
                    </a>
                    
                    (${c.timestamp ? new Date(c.timestamp).toLocaleString() : "Fecha desconocida"})
                    
                </small>
            </li>`;
        });

        html += `</ul></div>`;
    }

    return createPage("Comentarios Agrupados", html);
}


export function formularioBorrarComentario(idProducto, comentario) {
    return createPage(
        `Borrar Comentario`,
        `
        <div style="max-width: 500px; margin: 30px auto; padding: 20px; border: 2px solid #dc3545; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); background: #fff;">
            <h2 style="text-align:center; color:#dc3545;">⚠️ Confirmar Borrado</h2>
            <p style="text-align:center; color:#333;">¿Estás seguro que deseas borrar este comentario?</p>
            <p style="text-align:center; font-style: italic;">"${comentario.comentario}"</p>
            <form action="/productos/${idProducto}/comentarios/${comentario._id}/borrar" method="post" style="text-align:center;">
                <button type="submit" style="padding:10px 15px; border:none; border-radius:6px; background:#dc3545; color:white; font-size:16px; cursor:pointer;">
                    Sí, borrar
                </button>
            </form>
            <div style="text-align:center; margin-top:15px;">
                <a href="/productos/${idProducto}" style="text-decoration:none; color:white; background:#6c757d; padding:8px 12px; border-radius:5px;">⬅ Cancelar</a>
            </div>
        </div>
        `
    );
}

// ✅ También falta esta función para el formulario de edición
export function formularioEditarComentario(idProducto, comentario) {
    return createPage(
        `Editar Comentario`,
        `
        <div style="max-width: 600px; margin: 30px auto; padding: 20px; border: 1px solid #ccc; border-radius: 12px; box-shadow: 2px 2px 12px rgba(0,0,0,0.1); background: #fff;">
            <h2 style="text-align: center;">Editar Comentario</h2>
            <form action="/productos/${idProducto}/comentarios/${comentario._id}/editar" method="post" style="display: flex; flex-direction: column; gap: 15px;">
                <textarea name="comentario" placeholder="Escribe tu comentario" rows="4" style="padding: 10px; border: 1px solid #ccc; border-radius: 8px; font-size: 15px; resize: vertical;" required>${comentario.comentario}</textarea>
                <button type="submit" style="background: #ffc107; color: #333; border: none; padding: 12px; border-radius: 8px; font-size: 16px; cursor: pointer;">
                    Guardar Cambios
                </button>
            </form>
            <div style="text-align: center; margin-top: 20px;">
                <a href="/productos/${idProducto}" style="text-decoration: none; color: white; background: #007bff; padding: 10px 20px; border-radius: 6px; font-size: 16px;">
                    ⬅ Cancelar
                </a>
            </div>
        </div>
        `
    );
}