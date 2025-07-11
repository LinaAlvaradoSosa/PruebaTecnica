const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController')


router.get('/', clientController.getAllClients)
router.get('/detalles/:id', clientController.getClientDetail)



module.exports = router