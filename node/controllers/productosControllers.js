import Producto from "../models/productosModels.js";

const crearProducto = async (req, res) => {
    try {
        await Producto.create(req.body)
        res.json({
            messege: "se ha creado correctamente el producto"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun producto ${error}`
        })
        
    }
};

const mostrarProductos = async (req, res) => {
    try{
        const productos = await Producto.findAll()
        res.json(productos)

    }catch(error){
        res.json({
            message: "No tiene ningun producto"
        })
    }
};

const mostrarProducto = async (req, res) => {
    try {
        const producto = await Producto.findOne({ where:{id: req.params.id}})
        res.json(producto)
    } catch (error) {
        res.json({
            message: `no se encontro ningun producto ${error}`
        })
    }
};

const editarProducto = async (req, res) => {
    try {
        await Producto.update(red.body, {where: {id: req.params.id}});
        res.json({
            messege: "se ha modificado correctamente el producto"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun producto ${error}`
        })
    }
};

const eliminarProducto = async (req, res) => {
    try {
        await Producto.destroy({where: {id: req.params.id}});
        res.json({
            messege: "se ha eliminado correctamente el producto"
        })
    } catch (error) {
        res.json({
            messege: `no se ha creado ningun producto ${error}`
        })
        
    }
};

export { mostrarProductos, crearProducto, mostrarProducto, eliminarProducto, editarProducto };
