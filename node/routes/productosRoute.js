import express from "express";
import { crearProducto, mostrarProductos, mostrarProducto, eliminarProducto, editarProducto} from "../controllers/productosControllers.js";

const productosRoute = express.Router();

productosRoute.post('/', crearProducto)
productosRoute.get('/', mostrarProductos)
productosRoute.get('/:id', mostrarProducto)
productosRoute.delete('/:id', eliminarProducto)
productosRoute.put('/:id', editarProducto)

export default productosRoute;