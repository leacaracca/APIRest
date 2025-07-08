import express from 'express'
import productRouter from './routes/product.route.js'




// settings

const app  = express()
app.set("PORT", 3000)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes

app.use('api/products', productRouter )

//listeners

app.listen(app.get("PORT"),async () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`)
})

