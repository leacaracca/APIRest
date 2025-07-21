import express from 'express'
import cors from 'cors'
import productRouter from './routes/product.route.js'
import authRouter from './routes/auth.route.js'
import { envs } from './config/envs.js'

// settings

const app  = express()

const corsOptions ={
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders:['Content-type','Authorization'],
    credentials: true 
};


app.use(cors(corsOptions))
app.set("PORT", envs.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes

app.use('/auth', authRouter)
app.use('/api/products', productRouter)


//middleware 404 

app.use((req, res, next)=>{
    res.status(404).json({message:"Recurso no encontrado o ruta inválida"})
})

//listeners

app.listen(app.get("PORT"),async () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`)
})

