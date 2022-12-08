import dataBase from "../database/database.js";
import {DataTypes, Sequelize} from "sequelize";

const Placas = dataBase.define('placas', {
  placa: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.STRING
  },
  fecha_ingreso: {
    type: Sequelize.DATE,
    get: function() { 
      return this.getDataValue('fecha_ingreso')
        .toLocaleString();
    }
  },
  fecha_salida: {
    type: DataTypes.STRING
  }
});

export default Placas