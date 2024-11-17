// Importamos la conexión a la base de datos
import db from "../database/bds.js";
import { DataTypes } from "sequelize";

const ReservasVip = db.define('ReservasVIPs', {
  reserva_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mesa_id: {
    type: DataTypes.INTEGER
  },
  cliente_nombre: {
    type: DataTypes.STRING
  },
  cliente_telefono: {
    type: DataTypes.STRING(15)
  },
  evento_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Eventos',
      key: 'evento_id'
    }
  },
  costo_reserva: {
    type: DataTypes.DECIMAL(10, 2)
  },
  estado: {
    type: DataTypes.ENUM('confirmada', 'cancelada', 'pendiente')
  },
  numero_personas: {
    type: DataTypes.INTEGER
  },
  servicios_incluidos: {
    type: DataTypes.TEXT
  },
  notas_adicionales: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: false
});

export default ReservasVip;
