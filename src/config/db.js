import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { config } from 'dotenv'


config()


const firebaseConfig = {
  APIKEY:process.env.APIKEY,
  AUTHDOMAIN:process.env.AUTHDOMAIN ,
  PROJECTID: process.env.PROJECTID,
  STORAGEBUCKET:process.env.STORAGEBUCKET,
  MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
  APPID:process.env.APPID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

const db = getFirestore(app)


export { db }