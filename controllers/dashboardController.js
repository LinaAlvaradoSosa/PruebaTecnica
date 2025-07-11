const dashboardModel = require('../models/dashboardModel')
const interactionModel = require('../models/interactionModel')


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

exports.getAllInteractions = (req, res) => {
    interactionModel.getAllInteractions((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
        });
    };