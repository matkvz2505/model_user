// requires
const mongoose = require("mongoose");

// create model schema
const ClienteSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        cpf: { type: Number, required: true },
        name: { type: Number, required: false}
    },
    { timestamps: true }
);

// export
const Cliente = mongoose.model('Cliente', ClienteSchema)

module.exports = { 
    Cliente,
}
/*
    {
        "name": "Teste user",
        "cpf": 123.123.123-00,
        "idade": 22
    }

*/