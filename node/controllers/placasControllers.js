import Placas from "../models/placasModels.js";

const mostrarPlacas = async (req, res) => {
    try{
        const placas = await Placas.findAll()
        res.json(placas)

    }catch(error){
        res.json({
            message: "No tiene ningun placa"
        })
    }
};
const crearPlaca = async (req, res) => {
    try {
        await Placas.create(req.body)
        res.json({
            messege: "se ha creado correctamente el producto"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun producto ${error}`
        })
        
    }
};
const eliminarPlaca = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export { mostrarPlacas, crearPlaca, eliminarPlaca };
