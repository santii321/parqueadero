import express from "express";
import { crearProducto, mostrarProductos, mostrarProducto, eliminarProducto, editarProducto} from "../controllers/productosControllers.js";

const productosRoute = express.Router();

productosRoute.post('/', crearProducto)
productosRoute.get('/', mostrarProductos)
productosRoute.get('/:id', mostrarProducto)
productosRoute.put('/:id', editarProducto)
productosRoute.delete('/:id', eliminarProducto)

export default productosRoute;