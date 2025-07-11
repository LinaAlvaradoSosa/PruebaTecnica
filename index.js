const express = require('express')
const app = express()
const productRoutes = require('./routes/productRoutes')
const clientRoutes = require('./routes/clientRoutes')
const dashboardRoutes = require ('./routes/dashboardRoutes')

app.use(express.json())

app.use('/products', productRoutes)
app.use('/clients', clientRoutes)
app.use('/dashboard', dashboardRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})