import Product from '../models/product.model.js'

const productModel = new Product()

const getAllProducts = async () =>{

    return await productModel.getAllProducts()
}

const getProductById = async (id) => {
    
    return await productModel.getProductById(id)
    
}

const saveProduct = async (object) => {    
    // me faltó hacer la lógica de negocio que valide que el producto ya estaba en la lista
    return await productModel.saveProduct(object)
    
}

const deleteProduct = async (id) => {
    
    return await productModel.deleteProduct(id)

}

export default{ getAllProducts, getProductById, saveProduct, deleteProduct }