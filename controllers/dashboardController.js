const dashboardModel = require('../models/dashboardModel')


exports.getDashboard = (req, res) => {
    dashboardModel.getMostActiveClient((err, client)=>{
        if (err) return res.status(500).json({error: err.message})
        
    dashboardModel.getMostViewedProduct((err, product) =>{
        if (err) return res.status(500).json({error: err.message})
            
        
            res.json({
                mostActiveClient: client,
                mostViewedProduct: product
            })


    })
    })


}