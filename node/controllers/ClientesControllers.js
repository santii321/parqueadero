//*importamos el modelo

import clientesModel from "../models/ClientesModel.js";

//**Metodos para el CRUD**/

//*Mostrar todo los clientes

const mostrarClientes = async (req, res) => {
    try {
        const clientes = await clientesModel.findAll()
        res.json(clientes)
    } catch (error) {
        res.json({
            message: `La base de datos se encuentra vacia ${error}`
        })
    }
}

//*Mostrar un cliente
const mostrarCliente = async (req, res) => {
    try {
        const cliente = await clientesModel.findOne({
            where: { id: req.params.id }
        })
        res.json(cliente)
    } catch (error) {
        res.json({
            message: `No se encontro ningun cliente con este id ${error}`
        })
    }
}
//*Crear cliente

//*Editar cliente

//*Eliminar cliente
