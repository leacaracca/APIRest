import { Router } from "express";
import productController from '../controllers/product.controller.js'


const router = Router()

// get

router.get('/',productController.getAllProducts)
router.get('/:id',productController.getProductById)

router.post('/',productController.saveProduct)
router.post('/:id',productController.deleteProduct)


export default router
