import { Router } from "express";
import productController from '../controllers/product.controller.js'
import { authentication } from '../middlewares/auth.middleware.js'


const router = Router()

// get

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)

// post 

router.post('/',authentication, productController.saveProduct)

// delete
router.delete('/:id',authentication, productController.deleteProduct)


export default router
