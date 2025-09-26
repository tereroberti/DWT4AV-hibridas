export function createPage(title, content) {
  return `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f8f9fa; }
        header { background: #007bff; padding: 15px; }
        header nav a { color: white; text-decoration: none; margin: 0 10px; font-weight: bold; }
        header nav a:hover { text-decoration: underline; }
        main { padding: 20px; }
      </style>
    </head>
    <body>
      <header>
        <nav>
          <a href="/">Inicio</a>
          <a href="/productos">Productos</a>
          <a class="nav-link" href="/productos?categoria=Bolsones">Bolsones</a>
          <a class="nav-link" href="/productos?categoria=Almacen">Almacén</a>
          <a class="nav-link" href="/productos?categoria=Fresco">Fresco</a>
        </nav>
      </header>
      <main>
        ${content}
      </main>
    </body>
  </html>
  `;
}
