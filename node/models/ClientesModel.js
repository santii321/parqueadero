//*importamos la conexion a la base de datos

import dataBase from "../database/database.js";

//*importamos sequelize 
import { DataTypes } from "sequelize";

const clientesModel = dataBase.define('clientes', {
    nombre: { 
        type: DataTypes.STRING },
    documento: {
         type: DataTypes.INTEGER },
    correo: { 
        type: DataTypes.STRING },
    direccion: { 
        type: DataTypes.STRING },
    telefono: { 
        type: DataTypes.STRING },
    createdAt: { 
        type: DataTypes.DATE },
    updatedAt: { 
        type: DataTypes.DATE },

})

export  default clientesModel;
