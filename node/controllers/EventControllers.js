import Evento from "../models/Event.js";
import { Op } from 'sequelize';

/** Metodos para el CRUD */

/**
 * Motrar todos los eventos existentes
 */
export const getAllEvents = async (req, res) => {
  try {
    const events = await Evento.findAll();
    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getEventNombreEstado = async (req, res) => {
  try {
    const { nombre_evento, estado } = req.query;

    const filtro = {};

    if (nombre_evento) {
      filtro.nombre_evento = { [Op.like]: `%${nombre_evento}%` };
    }

    if (estado) {
      filtro.estado = estado;
    }

    const eventos = await Evento.findAll({
      where: filtro,
    });

    if (eventos.length === 0) {
      return res.status(404).json({ message: 'No se encontraron eventos con los parámetros especificados.' });
    }

    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los eventos', error: error.message });
  }
};




/**
 * Metodo para obtener un evento segun el id
 */
export const getEvent = async (req, res) => {
  try {
    const evento = await Evento.findAll({
      where: {
        evento_id: req.params.id
      }
    });
    res.json(evento[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Crear un nuevo evento
 */
export const createEvent = async (req, res) => {
  try {
    await Evento.create(req.body);
    res.json({
      "message": "Evento CREADO correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**
 * Metodo para editar un evento 
 */
export const editEvent = async (req, res) => {
  try {
    await Evento.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({
      "message": "Evento EDITADO correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/**Metodo para eliminar un evento */
export const deleteEvent = async (req, res) => {
  try {
    await Evento.destroy({
      where: {
        evento_id: req.params.id
      }
    });
    res.json({
      "message": "Evento ELIMINADO correctamente"
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
