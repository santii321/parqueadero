import express from "express";
import { crearPlaca, mostrarPlacas, eliminarPlaca, editarPlaca, mostrarPlaca} from "../controllers/placasControllers.js";

const placasRoute = express.Router();

placasRoute.get('/', mostrarPlacas)
placasRoute.get('/:id', mostrarPlaca)
placasRoute.post('/', crearPlaca)
placasRoute.delete('/:id', eliminarPlaca)
placasRoute.put('/:id', editarPlaca)


export default placasRoute