import productModel from '../models/product.model.js'


const getAllProducts = async () =>{

    return await productModel.getAllProducts()
}

const getProductById = async (id) => {
    
    return await productModel.getProductById(id)
    
}

const saveProduct = async (object) => {

        return await productModel.saveProduct(object)
    
}

const deleteProduct = async (id) => {
    
    return await productModel.deleteProduct(id)

}

export default{ getAllProducts, getProductById, saveProduct, deleteProduct }