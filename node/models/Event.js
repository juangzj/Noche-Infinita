// importamos la conexion a la base de datos
import db from "../database/bds.js";

import { DataTypes } from "sequelize";

const Evento = db.define('Eventos', {
  evento_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_evento: { type: DataTypes.STRING },
  fecha: { type: DataTypes.DATEONLY },
  hora_inicio: { type: DataTypes.TIME },
  hora_fin: { type: DataTypes.TIME },
  dj_id: { type: DataTypes.INTEGER },
  capacidad_maxima: { type: DataTypes.INTEGER },
  descripcion: { type: DataTypes.TEXT },
  costo_entrada: { type: DataTypes.DECIMAL },
  estado: { type: DataTypes.ENUM('programado', 'en curso', 'finalizado') }
}, {
  timestamps: false  // Esto desactiva 'createdAt' y 'updatedAt'
});


export default Evento