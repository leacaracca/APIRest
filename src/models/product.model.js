//Modelo de producto

import { db } from '../config/db.js'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc
} from 'firebase/firestore'

class Product {

    productsCollection = collection(db, 'products')

    async getAllProducts () {
      try {
      const querySnapShot = await getDocs(productsCollection)
      const products = querySnapShot.map(doc => ({
      id:doc.id,
      ...doc.data()
      }))
      return products
    } catch (error) {
       throw new (Error,error.message)
      }
    }

    async getProductById (id) {   
        try {
          const product = await getDoc(doc(productsCollection, id))
          if(product.exists()){
            return product.data()
          }else
            return null
        }catch (error) {
            throw new (Error,error.message)
        }
    }

    async saveProduct (object) {
      try {
        await addDoc(productsCollection, object)
      } catch (error) {
      throw new (Error,error.message)
      }    
    }

    async deleteProduct (id) {
      try {
        await deleteDoc(doc(productsCollection, id))
      } catch (error) {
        throw new (Error, error.message)
      }
    }
}

export default Product
