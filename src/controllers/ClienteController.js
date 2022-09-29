// Require
const { axios } = require("axios");
const Cliente = require("../models/ClienteModel");
const path = require('path')

// Config Routes

// Read All

const getRoot = async (req, res) => {
    try {
        res.sendFile(__dirname + "/public/index.html")
    } catch (error) {
        return error
    }
}

const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find({})
        res.send(clientes)
    } catch (err) {
        res.status(400).send({ mensagem: "getAllClientes - Erro ao consultar os clientes" });
    }
};

const showSite = async (req,res) => {
    try {
        const { data: ret } = await axios.get(
            "https://www.cnbc.com/world/",
          );
          res.status(200).send(ret);
    } catch (err) {
        res.status(400).send({ mensagem: "ERROR OF FIND SITE" });
    }
}


module.exports = {
    getAllClientes,
    showSite,
    getRoot
};
// // Read one by Id
// exports.getClienteById = async (req, res) => {
//     try {
//         const {id} = req.params
//         const cliente = await ClienteModel.find({_id: id})
//         res.send(cliente)
//     } catch (err) {
//         res.status(400).send({ mensagem: "getClienteById - Erro ao consultar o cliente" });
//     }
// }

// // Create
// exports.postCliente = async (req, res) => {
//     try {
//         const cliente = await ClienteModel.create(req.body)
//         res.status(200).send(cliente)
//     } catch (err) {
//         res.status(400).send({ mensagem: "postCliente - Erro ao cadastrar o cliente" });
//     }
// }

// // Update
// exports.putCliente = async (req, res) => {
//     try {
//         const {id} = req.params
//         await ClienteModel.updateOne({_id: id}, req.body)
//         res.status(200).send({mensagem: 'Cliente atualizado com sucesso'})
//     } catch (err) {
//         res.status(400).send({ mensagem: "putCliente - Erro ao atualizar o cliente" });
//     }
// }

// // Delete
// exports.deleteCliente = async (req, res) => {
//     try {
//         const {id} = req.params
//         await ClienteModel.deleteOne({_id: id})
//         res.status(200).send({mensagem: 'Cliente removido com sucesso'})
//     } catch (err) {
//         res.status(400).send({ mensagem: "putCliente - Erro ao atualizar o cliente" });
//     }
// }
