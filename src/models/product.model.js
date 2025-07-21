//Modelo de producto

import { db } from '../config/db.js'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    query,
    where
} from 'firebase/firestore'

const productsCollection = collection(db, 'products')

class Product {

    constructor(){}    

    async getAllProducts () {
      try {
      const querySnapShot = await getDocs(productsCollection)
      const products = querySnapShot.docs.map(doc => ({
      id:doc.id,
      ...doc.data()
      }))
      return products
    } catch (error) {
       throw new Error("No se pudieron obtener los productos de la base de datos.")
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
            throw new Error("No se pudo obtener el producto de la base de datos.")
        }
    }

    async getProductByName (searchedName) {
        // la idea era con este método no agregar productos duplicados pero no llegué   
        try {
          const q = query(productsCollection, where("name", "==", searchedName))
          const querySnapShot = await getDocs(q)
          if(querySnapShot.empty){
            return null
          }else{
            const productDoc = querySnapShot.docs[0]
            const product = {
              name: productDoc.name,
              ...productDoc.data()
            }
            return product
          }           
        }catch (error) {
            throw new Error("No se pudo obtener el producto de la base de datos.")
        }
    }


    async saveProduct (object) {
      try {
        await addDoc(productsCollection, object)
      } catch (error) {
      throw new Error("No se pudo guardar el producto de la base de datos.")
      }    
    }

    async deleteProduct (id) {
      try {
        await deleteDoc(doc(productsCollection, id))
      } catch (error) {
        throw new Error("No se pudo eliminar el producto de la base de datos.")
      }
    }
}

export default Product
