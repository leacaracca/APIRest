import productService from '../services/product.service.js'
import {isNumberEmpty, isStringEmpty} from '../utils/validationUtils.js'

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts()
        res.status(200).json({message: "Lista de productos", payload: products})
    } catch (error) {
        res.status(500).json({ message: "Ha ocurrido un error inesperado en el servidor",error: error.message})
    }    
}

const getProductById = async (req, res) => {
  try {
      const {id} = req.params
      const product = await productService.getProductById(id)
      if(!product) return res.status(404).json({message:"El producto con el ID especificado no existe."})
      res.status(200).json({message: "Producto encontrado" , payload: product})
  } catch (error) {
      res.status(500).json({ message: "Ha ocurrido un error inesperado en el servidor",error: error.message})
  }  
}

const saveProduct = async (req, res) => {
    try {
      const {category, name, stock, price} = req.body
      if(isStringEmpty(category) || isStringEmpty(name) || isNumberEmpty(stock) || isNumberEmpty(price) || (stock <= 0 || price <= 0)){
        return res.status(400).json({
          message: "Todos los campos son requeridos, no se permiten tipos diferentes y estructuras vacias , stock y precio > 0 "})}
      await productService.saveProduct({name, category, stock, price})
      res.status(200).json({message: "Producto agregado"})
    } catch (error) {
        res.status(500).json({ message: "Ha ocurrido un error inesperado en el servidor",error: error.message})
    }
    
}

const deleteProduct = async (req, res) => {
    try {
      const {id} = req.params
      if(isStringEmpty(id))
        return res.status(400).json({message: "Todos los campos son requeridos"})
      const product = await productService.getProductById(id)
       if(!product) 
        return res.status(404).json({message:"El producto con el ID especificado no existe."}) 
      await productService.deleteProduct(id)
      res.status(200).json({message: "Producto eliminado"})
    } catch (error) {
       res.status(500).json({ message: "Ha ocurrido un error inesperado en el servidor",error: error.message})
    }
}

export default {getAllProducts, getProductById, saveProduct, deleteProduct}