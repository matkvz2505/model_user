// Require
const express = require('express')
const router = express.Router()
const ClienteController = require('../controllers/ClienteController')
// const path = require('path')

// routes
router.get('/getClientes', ClienteController.getAllClientes)
router.get('/site', ClienteController.showSite)
// router.get('/getCliente/:id', ClienteController.getClienteById)
// router.post('/postCliente', ClienteController.postCliente)
// router.put('/putCliente/:id', ClienteController.putCliente)
// router.delete('/removeCliente/:id', ClienteController.deleteCliente)
// router.get('/test', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"))
// })
// router.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/style.css"))
// })

module.exports = {
    router
}