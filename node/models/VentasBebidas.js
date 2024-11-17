import { DataTypes } from 'sequelize';
import db from '../database/bds.js';

const VentasBebidas = db.define('VentasBebidas', {
  venta_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_venta: {
    type: DataTypes.DATEONLY
  },
  hora_venta: {
    type: DataTypes.TIME
  },
  bebida: {
    type: DataTypes.STRING(100)
  },
  categoria: {
    type: DataTypes.ENUM('cóctel', 'botella', 'cerveza')
  },
  cantidad: {
    type: DataTypes.DECIMAL(10, 2)
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2)
  },
  total_venta: {
    type: DataTypes.DECIMAL(10, 2),
    get() {
      const cantidad = this.getDataValue('cantidad');
      const precioUnitario = this.getDataValue('precio_unitario');
      return cantidad * precioUnitario;
    }
  },
  metodo_pago: {
    type: DataTypes.ENUM('efectivo', 'tarjeta de crédito', 'transferencia')
  },
  evento_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Eventos',
      key: 'evento_id'
    }
  }
}, {
  tableName: 'VentasBebidas',
  timestamps: false,
});

export default VentasBebidas;
