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


const productsCollection = collection(db, 'products')

export const getAllProducts = async () => {
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

export const getProductById = async (id) => {    

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

export const saveProduct = async (product) => {

    try {
      await addDoc(productsCollection,product)
    } catch (error) {
      throw new (Error,error.message)
    }    
}

export const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(productsCollection, id))
    } catch (error) {
      throw new (Error, error.message)
    }
}