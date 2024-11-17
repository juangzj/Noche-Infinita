// Importamos la conexion a la base de datos
import db from "../database/bds.js";
import { DataTypes } from "sequelize";

const Dj = db.define('Djs', {
  dj_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_dj: {
    type: DataTypes.STRING(255),
  },
  pais_origen: {
    type: DataTypes.STRING(100),
  },
  genero_musical: {
    type: DataTypes.STRING(50),
  },
  numero_eventos: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  honorarios: {
    type: DataTypes.DECIMAL(10, 2),
  },
  estado: {
    type: DataTypes.ENUM('activo', 'inactivo'),
  },
  representante_contacto: {
    type: DataTypes.STRING(255),
  },
  notas_adicionales: {
    type: DataTypes.TEXT,
  },
  proximo_evento: {
    type: DataTypes.DATE,
  }
}, {
  timestamps: false
});

export default Dj;
