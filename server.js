import express from "express";
import ProductosRoute from "./routes/productos.routes.js"
import ProductosApiRoute from "./api/routes/productos.api.routes.js"
import ComentariosApiRoute from "./api/routes/comentarios.api.routes.js"
import comentariosRouter from './routes/comentarios.routes.js';
const app = express();

app.use(express.static("public"));
app.use( express.urlencoded({extended: true}) )
app.use( express.json() )
app.use(ProductosRoute)
app.use("/api/productos",ProductosApiRoute)
app.use("/api/comentarios", ComentariosApiRoute)
app.use('/comentarios', comentariosRouter); 

app.listen(3333, () => console.log("funcionando"));
