//Importamos el modelo
import ExperienciaClientes from "../models/ExperienciaClientes.js";

/**Metodos para el CRUD */

//metodo para mostrar todas las experiencias de usuario existentes
export const getAllExprienciasCliente = async (req, res) => {

  try {
    const experienciasClientes = await ExperienciaClientes.find()
    res.status(200).json(experienciasClientes)
  } catch (error) {
    res.json({ message: error.message })
  }

}

//metodo para mostar un una expriencia de usuario segun el id
export const getExperienciaCliente = async (req, res) => {
  try {
    const id = req.params.id
    const experienciaCliente = await ExperienciaClientes.findById({ _id: id }).then((experienciaCliente) => {
      res.status(200).json(experienciaCliente)
    })

  } catch (error) {
    res.json({ message: error.message })
  }

}

//metodo para crear una nueva experiencia de cliente
export const createExperienciaCliente = async (req, res) => {
  try {
    await ExperienciaClientes.create(req.body)
    res.status(200).json({
      "message": "EXperiencia de usuario CREADA correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }

}