import dataBase from "../database/database.js";
import {DataTypes} from "sequelize";

const Productos = dataBase.define('productos', {
  imagen: {
    type: DataTypes.STRING
  }, 
  nombre: {
    type: DataTypes.STRING
  }, 
  descripcion: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.DOUBLE
  }, 
  cantidad: {
    type: DataTypes.INTEGER
  }, 
});

export default Productos