const clientModel = require ('../models/clientModel')


exports.getAllClients = (req, res) => {
    const {city , from, to} = req.query;

    const filters ={
        city: city || null,
        from: from || null,
        to: to || null
    }

    clientModel.getAllClients(filters, (err, rows)=> {
        if(err){
            res.status(500).json({error: err.message})
        } else {
            res.json(rows)
        }
    })

}

exports.getClientDetail =(req, res) => {
    const id = req.params.id

    clientModel.getClientById(id, (err, client) => {
        if (err) return res.status(500).json({error: err.message})
        if (!client) return res.status(404).json({error: 'Cliente no encontrado'})


        clientModel.getInteractionsByClientId (id, (err,interactions) => {
            if (err) return res.status(500).json({error: err.message})
        
            res.json({
                client,
                interactions
            }) 

        })

    })

}
