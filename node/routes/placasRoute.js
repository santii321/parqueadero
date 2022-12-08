import express from "express";
import { crearPlaca, mostrarPlacas, eliminarPlaca} from "../controllers/placasControllers.js";

const placasRoute = express.Router();

placasRoute.get('/', mostrarPlacas)
placasRoute.post('/', crearPlaca)
placasRoute.delete('/:id', eliminarPlaca)


export default placasRoute