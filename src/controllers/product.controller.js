import productService from '../services/product.service.js'

const getAllProducts = async (req, res) => {

    try {
        const products = await productService.getAllProducts()
        res.status(200).json({message: "Lista de productos", payload: products})
    } catch (error) {
        res.status(500).json({})
    }
    
}

const getProductById = async (req, res) => {

  try {
      const {id} = req.body
      //validar que llegue la id y que se encuentre el producto
      const product = await productService.getProductById(id)
      res.status(200).json({message: "Producto encontrado" , payload: product})
  } catch (error) {
      res.status(500).json({})
  }
  
}

const saveProduct = async (req, res) => {

    try {
      const {name, category, stock} = req.body
      //validaciones 
      await productService.createProduct({name, category, stock})
      res.status(200).json({message: "Producto agregado"})
    } catch (error) {
        res.status(500).json({})
    }
    
}

const deleteProduct = async (req, res) => {

    try {
      const {id} = req.body
      //validar que llegue la id y que se encuentre el producto
      const product = await productService.getProductById(id)
      await productService.deleteProduct(id)
      res.status(200)
    } catch (error) {
        res.status(500).json({})
    }
}

export default {getAllProducts, getProductById, saveProduct, deleteProduct}