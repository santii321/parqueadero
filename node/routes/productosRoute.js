import express from "express";
import { crearProducto, mostrarProductos, mostrarProducto, eliminarProducto, editarProducto} from "../controllers/productosControllers.js";

const productosRoute = express.Router();

productosRoute.get('/', mostrarProductos)
productosRoute.get('/:id', mostrarProducto)
productosRoute.post('/', crearProducto)
productosRoute.delete('/:id', eliminarProducto)
productosRoute.put('/:id', editarProducto)

export default productosRoute