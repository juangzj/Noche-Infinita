//Importamos el modelo
import Evento from "../models/Event.js";

/** Metodos para el CRUD */

/**
 * Motrar todos los eventos existentes
 */
export const getAllEvents = async (req, res) => {

  try {
    const events = await Evento.findAll()
    res.json(events)
  } catch (error) {
    res.json({ message: error.message })
  }
}

/**
 * Metodo para obtener un evento segun el id
 */
export const getEvent = async (req, res) => {
  try {
    const evento = await Evento.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(evento)
  } catch (error) {
    res.json({ message: error.message })
  }
}

/**
 * Crear un nuevo evento
 */

export const createEvent = async (req, res) => {
  try {
    await Evento.create(req.body)
    res.json({
      "message": "Evento CREADO correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

/**
 * Metodo para editar un evento 
 */

export const editEvent = async (req, res) => {
  try {
    await Evento.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      "message": "Evento EDITADO correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

/**Metodo para eliminar un evento */

export const deleteEvent = async (req, res) => {
  try {
    await Evento.destroy({
      where: { id: req.params.id }
    })
    res.json({
      "message": "Evento ELIMINADO correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }

}