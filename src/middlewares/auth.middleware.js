import { verifyToken } from '../utils/jwt.js';

export const authentication = (req, res, next) => {
    
    const token = req.headers["authorization"]?.split(" ")[1]
    console.log(token)

    if(!token) return res.status(401).json({message: "Se requiere autenticación para acceder a este recurso."})
    
    const verificationResult = verifyToken(token)

    if(!verificationResult.valid) return res.status(403).json({message:"No tienes permiso para acceder a este recurso o realizar esta acción."})
    
    req.user = verificationResult.decoded

    next()

}