const Product = require('../models/productModel')


exports.getAllProducts = (req, res) =>{
    Product.getAllProducts((err, rows)=> {
        if(err) return res.status(500).json({error: err.message})
        res.json(rows)
    })
}

exports.getProdusctById = (req, res) => {
    const id = req.params.id
    Product.getProductById (id, (err, row)=>{
        if(err) return res.status(500).json({error: err.message})
        if (!row) return res.status(404).json({message: 'Producto no encontrado'})
        res.json(row)
    })
}

