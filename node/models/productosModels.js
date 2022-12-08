import dataBase from "../database/database.js";
import {DataTypes} from "sequelize";

const Productos = dataBase.define('productos', {
  nombre: {
    type: DataTypes.STRING
  }, 
  descripcion: {
    type: DataTypes.STRING
  }
});

export default Productos