// Importamos el modelo
import Dj from "../models/Dj.js";

/** Métodos para el CRUD */

/**
 * Mostrar todos los DJs existentes
 */
export const getAllDjs = async (req, res) => {
  try {
    const djs = await Dj.findAll();
    res.json(djs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Metodo para obtener un DJ según el id
 */
export const getDj = async (req, res) => {
  try {
    const dj = await Dj.findAll({
      where: {
        dj_id: req.params.id
      }
    });
    res.json(dj[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Crear un nuevo DJ
 */
export const createDj = async (req, res) => {
  try {
    await Dj.create(req.body);
    res.json({
      "message": "DJ CREADO correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Método para editar un DJ
 */
export const editDj = async (req, res) => {
  try {
    await Dj.update(req.body, {
      where: { dj_id: req.params.id }
    });
    res.json({
      "message": "DJ EDITADO correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Método para eliminar un DJ
 */
export const deleteDj = async (req, res) => {
  try {
    await Dj.destroy({
      where: {
        dj_id: req.params.id
      }
    });
    res.json({
      "message": "DJ ELIMINADO correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
