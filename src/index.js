import express from 'express';
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// importando rutas
import indexRoutes from "./routes/index.js";

// Initialize express
const app = express();

// creando ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));
// indicando ruta de vistas
app.set("views", join(__dirname, "views"));
// caracteristicas a usar con html
app.set('view engine','ejs')

/*
// al solicitar ruta inicial
app.get('/', (req,res) => res.render('index'))

// otras rutas
app.get('/about', (req,res) => res.render('about'))
app.get('/contact', (req,res) => res.render('contact'))
*/

// usando las rutas
app.use(indexRoutes);

// static files
app.use(express.static(join(__dirname, "public")));

// listening the Server
app.listen(3000);
console.log("Server on port", app.get("port"));
