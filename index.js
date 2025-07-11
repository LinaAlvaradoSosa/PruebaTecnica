const express = require('express')
const cors = require('cors')
const app = express()
const productRoutes = require('./routes/productRoutes')
const clientRoutes = require('./routes/clientRoutes')
const dashboardRoutes = require ('./routes/dashboardRoutes')



app.use(express.json())
app.use(cors())

app.use('/products', productRoutes)
app.use('/clients', clientRoutes)
app.use('/dashboard', dashboardRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})