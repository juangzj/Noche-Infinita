// Importamos la clase modelo
import ReservasVip from "../models/ReservasVip.js";

/** Métodos para el CRUD */

/**
 * Mostrar todas las reservas VIP existentes
 */
export const getAllReservasVip = async (req, res) => {
  try {
    const reservas = await ReservasVip.findAll();
    res.json(reservas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Obtener una reserva VIP según el ID
 */
export const getReservaVip = async (req, res) => {
  try {
    const reserva = await ReservasVip.findAll({
      where: {
        reserva_id: req.params.id
      }
    });
    res.json(reserva[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
/**
 * Metodo para obtener una reserva segun el id o estado de la reservaVip
 */
export const getReservaVipIdEstado = async (req, res) => {
  try {
    const { id, estado } = req.query;
    let whereCondition = {};
    if (id) {
      whereCondition.reserva_id = id;
    }
    if (estado) {
      whereCondition.estado = estado;
    }
    const reservas = await ReservaVip.findAll({
      where: whereCondition
    });
    if (reservas.length === 0) {
      return res.status(404).json({ message: 'No se encontraron reservas VIP con los parámetros especificados.' });
    }
    res.json(reservas);
  } catch (error) {

    res.status(500).json({ message: 'Error al obtener las reservas VIP', error: error.message });
  }
};



/**
 * Crear una nueva reserva VIP
 */
export const createReservaVip = async (req, res) => {
  try {
    await ReservasVip.create(req.body);
    res.json({
      message: "Reserva VIP CREADA correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Editar una reserva VIP existente
 */
export const editReservaVip = async (req, res) => {
  try {
    await ReservasVip.update(req.body, {
      where: { reserva_id: req.params.id }
    });
    res.json({
      message: "Reserva VIP EDITADA correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Eliminar una reserva VIP
 */
export const deleteReservaVip = async (req, res) => {
  try {
    await ReservasVip.destroy({
      where: {
        reserva_id: req.params.id
      }
    });
    res.json({
      message: "Reserva VIP ELIMINADA correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
