// Importamos la clase modelo
import VentasBebidas from "../models/VentasBebidas.js";

/** Métodos para el CRUD */

/**
 * Mostrar todas las ventas de bebidas existentes
 */
export const getAllVentasBebidas = async (req, res) => {
  try {
    const ventas = await VentasBebidas.findAll();
    res.json(ventas);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Obtener una venta de bebida según el ID
 */
export const getVentaBebida = async (req, res) => {
  try {
    const venta = await VentasBebidas.findAll({
      where: {
        venta_id: req.params.id
      }
    });
    res.json(venta[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Crear una nueva venta de bebida
 */
export const createVentaBebida = async (req, res) => {
  try {
    await VentasBebidas.create(req.body);
    res.json({
      message: "Venta de bebida CREADA correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Editar una venta de bebida existente
 */
export const editVentaBebida = async (req, res) => {
  try {
    await VentasBebidas.update(req.body, {
      where: { venta_id: req.params.id }
    });
    res.json({
      message: "Venta de bebida EDITADA correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Eliminar una venta de bebida
 */
export const deleteVentaBebida = async (req, res) => {
  try {
    await VentasBebidas.destroy({
      where: {
        venta_id: req.params.id
      }
    });
    res.json({
      message: "Venta de bebida ELIMINADA correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
