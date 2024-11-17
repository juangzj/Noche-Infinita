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
