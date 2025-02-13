import express from 'express';
import path from 'path';
import { verPosts, agregarPost, addLike } from "../queries/queries.js";
const router = express.Router();
const __dirname = import.meta.dirname;

//ruta principal
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

//get
router.get('/posts', async (req, res) => {
    const mostrarPosts = await verPosts();
    //console.log(mostrarPosts, "mostrarPosts");
    res.json(mostrarPosts)
})

//add 
router.post("/posts", async (req, res) => {
    const { titulo, img, descripcion } = req.body;
    const post = [titulo, img, descripcion];
    const result = await agregarPost(post);
    res.json(result)
});


//likes 
router.post("/post/:id", async (req, res) => {

});


//ruta generica
router.get('*', (req, res) => {
    res.status(400);
    res.send("<h1><center>404 ERROR -- Pagina No Encontrada</center></h1>");
})

export default router;