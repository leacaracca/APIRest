import { generateToken } from '../utils/jwt.js'

// Dado que no tengo un BD de usuarios y sus permisos de forma provisoria implemento el usuario de forma manual 


const default_user = {
    id:1, 
    email: "admin@admin.com",
    password:"pass123"
} 

const login = async (req,res) => {
      try {
        const {email, password } = req.body
        if(email === default_user.email && password === default_user.password){
            const token = generateToken(default_user)
            res.status(200).json({token})
         }else
            res.status(401).json({ message: "Se requiere autenticación para acceder a este recurso."})
      } catch (error) {
          res.status(500).json({message: "Error interno del servidor"})
      }
  
    
}

export default {login}
