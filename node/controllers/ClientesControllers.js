//*importamos el modelo

import clientesModel from "../models/ClientesModel.js";

//**Metodos para el CRUD**/

//*Mostrar todo los clientes

const mostrarClientes = async (req, res) => {
try {
    const clientes= await clientesModel.findAll()
    res.json(clientes)
} catch (error) {
    res.json({
        message: `No se encontro ningun cliente ${error}`
    })
}
}

//*Mostrar un cliente

//*Crear cliente

//*Editar cliente

//*Eliminar cliente
