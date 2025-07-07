import express from 'express'



// settings

const app  = express()
app.set("PORT", 3000)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes



//listeners

app.listen(app.get("PORT"),async () => {
    console.log(`Server on port http://localhost:${app.get("PORT")}`)
})

