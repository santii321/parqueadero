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
const mostrarPlaca = async (req, res) => {
    try {
        const placa = await Placas.findOne({ where:{id: req.params.id}})
        res.json(placa)
    } catch (error) {
        res.json({
            message: `no se encontro ningun placa ${error}`
        })
    }
};
const crearPlaca = async (req, res) => {
    try {
        await Placas.create(req.body)
        res.json({
            messege: "se ha creado correctamente el placa"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun producto ${error}`
        })
        
    }
};
const eliminarPlaca = async (req, res) => {
    try {
        await Placas.destroy({where: {id: req.params.id}});
        res.json({
            messege: "se ha eliminado correctamente el Placa"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun Placa ${error}`
        })
        
    }
};
const editarPlaca = async (req, res) => {
    try {
        await Placas.update(req.body, {where: {id: req.params.id}});
        res.json({
            messege: "se ha modificado correctamente el placa"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun placa ${error}`
        })
    }
};

export { mostrarPlacas, crearPlaca, eliminarPlaca,editarPlaca, mostrarPlaca };
