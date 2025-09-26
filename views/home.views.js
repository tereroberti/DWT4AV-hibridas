import { createPage } from "../pages/utils.js";


export function createHomePage() {
    const html = `
    
    <section style="
        text-align: center; 
        padding: 80px 20px; 
        background-color: #f8f9fa; 
        color: #343a40;
        border-bottom: 5px solid #007bff; /* Toque de color */
    ">
        <h1 style="font-size: 3em; margin-bottom: 15px; color: #343a40;">
            🛒 Bienvenidos a Mi Tienda Agroecológica
        </h1>
        <p style="font-size: 1.3em; margin-bottom: 30px; color: #6c757d;">
            Tu portal de productos frescos, naturales y de origen local. ¡Calidad asegurada!
        </p>
        
        <a href="/productos" 
            style="display:inline-block; margin-top:10px; background:#28a745; color:white; padding:15px 30px; border-radius:8px; text-decoration:none; font-size: 1.1em; font-weight: bold; transition: background 0.3s;"
            onmouseover="this.style.backgroundColor='#1e7e34'"
            onmouseout="this.style.backgroundColor='#28a745'"
        >
            👉 Explorar Catálogo
        </a>
    </section>

    <section style="max-width: 1000px; margin: 50px auto; padding: 0 20px;">
        <h2 style="text-align: center; color: #007bff; margin-bottom: 40px; font-size: 2em;">
            ¿Por qué elegirnos?
        </h2>
        
        <div style="display: flex; flex-wrap: wrap; justify-content: space-around; gap: 30px;">
            
            <div style="flex-basis: calc(33% - 30px); min-width: 250px; text-align: center; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); background: #ffffff;">
                <span style="font-size: 2.5em; color: #ffc107;">🌱</span>
                <h4 style="color: #333; margin: 10px 0;">Calidad Agroecológica</h4>
                <p style="color: #666; font-size: 0.9em;">Productos cultivados sin químicos, respetando los ciclos naturales.</p>
            </div>
            
            <div style="flex-basis: calc(33% - 30px); min-width: 250px; text-align: center; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); background: #ffffff;">
                <span style="font-size: 2.5em; color: #dc3545;">⏱️</span>
                <h4 style="color: #333; margin: 10px 0;">Entrega Rápida</h4>
                <p style="color: #666; font-size: 0.9em;">Nos aseguramos de que tus pedidos lleguen frescos y a tiempo a tu mesa.</p>
            </div>
            
            <div style="flex-basis: calc(33% - 30px); min-width: 250px; text-align: center; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); background: #ffffff;">
                <span style="font-size: 2.5em; color: #17a2b8;">⭐</span>
                <h4 style="color: #333; margin: 10px 0;">Comunidad Activa</h4>
                <p style="color: #666; font-size: 0.9em;">Lee y deja reseñas en nuestra sección de comentarios.</p>
            </div>
        </div>
    </section>

    <section style="max-width: 1000px; margin: 50px auto; padding: 30px; background: #e9ecef; border-radius: 10px; text-align: center;">
        <h3 style="color: #343a40; margin-bottom: 20px;">No lo decimos nosotras, lo dicen nuestros clientes</h3>
        
        <div style="display: flex; justify-content: center; gap: 20px;">
             <a href="/comentarios/agrupados" style="text-decoration: none" > <h4 style="text-align: center; color: #8414a3ff; margin-bottom: 30px; font-size: 1em;">
            ✨ Ver Valoraciones y Comentarios
        </h4></a>
        </div>
    </section>
    `;
    return createPage("Inicio", html);
}

// function createDestacadoCard(c, index) {
//     // Aseguramos que el productoNombre exista, si no, mostramos un placeholder
//     const nombreProducto = c.productoNombre || 'Producto Eliminado';
//     // Colores sutiles para diferenciar las tarjetas
//     const bgColor = index === 0 ? '#fff3cd' : (index === 1 ? '#e2f4ff' : '#e6ffe6'); 

//     return `
//     <div style="
//         flex: 1 1 30%; /* Para que las 3 tarjetas ocupen casi todo el ancho */
//         min-width: 280px; 
//         padding: 20px; 
//         border-radius: 10px; 
//         box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//         background: ${bgColor}; 
//         border-left: 5px solid #ffc107; /* Borde amarillo para llamar la atención */
//     ">
//         <small style="color: #6c757d; display: block; margin-bottom: 5px;">
//             Última opinión
//         </small>
//         <p style="margin: 10px 0; font-style: italic; color: #495057;">
//             "${c.comentario.length > 100 ? c.comentario.substring(0, 100) + '...' : c.comentario}"
//         </p>
        
//         <small style="color:#666; display: block; margin-bottom: 10px; font-weight: bold;">
//             👤 Por: <strong style="color: #333;">${c.email}</strong>
//         </small>
        
//         <small style="color:#666; display: block; margin-top: 5px; border-top: 1px dashed #ced4da; padding-top: 5px;">
//             🛒 Producto: <strong style="color: #007bff;">${nombreProducto}</strong>
//             <a href="/productos/${c.productoId}" 
//                 style="margin-left: 8px; color: #28a745; text-decoration: none; font-weight: bold; font-size: 0.9em;">
//                 Ver Producto ↗️
//             </a>
//         </small>
//     </div>
//     `;
// }


// export function createHomePage(comentariosDestacados = []) { // <-- ¡Recibe los datos!
//     const destacadosHtml = comentariosDestacados.map((c, index) => createDestacadoCard(c, index)).join('');
    
//     const html = `
    
//     <section style="
//         text-align: center; 
//         padding: 80px 20px; 
//         background-color: #f8f9fa; 
//         color: #343a40;
//         border-bottom: 5px solid #007bff;
//     ">
//         <h1 style="font-size: 3em; margin-bottom: 15px; color: #343a40;">
//             🛒 Bienvenidos a Mi Tienda Agroecológica
//         </h1>
//         <p style="font-size: 1.3em; margin-bottom: 30px; color: #6c757d;">
//             Tu portal de productos frescos, naturales y de origen local. ¡Calidad asegurada!
//         </p>
        
//         <a href="/productos" 
//             style="display:inline-block; margin-top:10px; background:#28a745; color:white; padding:15px 30px; border-radius:8px; text-decoration:none; font-size: 1.1em; font-weight: bold; transition: background 0.3s;"
//             onmouseover="this.style.backgroundColor='#1e7e34'"
//             onmouseout="this.style.backgroundColor='#28a745'"
//         >
//             👉 Explorar Catálogo
//         </a>
//     </section>

//     <section style="max-width: 1100px; margin: 50px auto; padding: 0 20px;">
//         <a href="/comentarios/agrupados" style="text-decoration: none" > <h2 style="text-align: center; color: #8414a3ff; margin-bottom: 30px; font-size: 2em;">
//             ✨ Ver Valoraciones y Comentarios
//         </h2></a>
        
//         <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">
//             ${destacadosHtml}
//         </div>
//     </section>

//     <section style="max-width: 1000px; margin: 50px auto; padding: 0 20px;">
//         <h2 style="text-align: center; color: #007bff; margin-bottom: 40px; font-size: 2em; border-top: 1px dashed #ced4da; padding-top: 30px;">
//             ¿Por qué elegirnos?
//         </h2>
        
//         <div style="display: flex; flex-wrap: wrap; justify-content: space-around; gap: 30px;">
            
//             <div style="flex-basis: calc(33% - 30px); min-width: 250px; text-align: center; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); background: #ffffff;">
//                 <span style="font-size: 2.5em; color: #ffc107;">🌱</span>
//                 <h4 style="color: #333; margin: 10px 0;">Calidad Agroecológica</h4>
//                 <p style="color: #666; font-size: 0.9em;">Productos cultivados sin químicos, respetando los ciclos naturales.</p>
//             </div>
            
//             <div style="flex-basis: calc(33% - 30px); min-width: 250px; text-align: center; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); background: #ffffff;">
//                 <span style="font-size: 2.5em; color: #dc3545;">⏱️</span>
//                 <h4 style="color: #333; margin: 10px 0;">Entrega Rápida</h4>
//                 <p style="color: #666; font-size: 0.9em;">Nos aseguramos de que tus pedidos lleguen frescos y a tiempo a tu mesa.</p>
//             </div>
            
//             <div style="flex-basis: calc(33% - 30px); min-width: 250px; text-align: center; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); background: #ffffff;">
//                 <span style="font-size: 2.5em; color: #17a2b8;">⭐</span>
//                 <h4 style="color: #333; margin: 10px 0;">Comunidad Activa</h4>
//                 <p style="color: #666; font-size: 0.9em;">Lee y deja reseñas en nuestra sección de comentarios.</p>
//             </div>
//         </div>
//     </section>
//     `;
//     return createPage("Inicio", html);
// }