// Require
const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')

// routes
router.get('/getClientes', ClienteController.getAllClientes)
router.get('/getCliente/:id', ClienteController.getClienteById)
router.post('/postCliente', ClienteController.postCliente)
router.put('/putCliente/:id', ClienteController.putCliente)
router.delete('/removeCliente/:id', ClienteController.deleteCliente)
router.get('/', ClienteController.showSite)

module.exports = router