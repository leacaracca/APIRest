import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { envs }  from './envs.js'


const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = envs.database


const firebaseConfig = {  
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore

const db = getFirestore(app)


export { db }