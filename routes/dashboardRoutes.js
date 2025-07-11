const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')



router.get('/', dashboardController.getDashboard)
router.get('/interacciones', dashboardController.getAllInteractions)


module.exports = router