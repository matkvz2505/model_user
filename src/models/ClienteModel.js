// requires
const mongoose = require("../database/db");

// create model schema
const ClienteSchema = mongoose.Schema(
    {
        nome: { type: String, trim: true, require: true },
        cpf: { type: String, trim: true, require: true },
        idade: {type: Number}
    },
    { timestamps: true }
);

// export
module.exports = mongoose.model('Cliente', ClienteSchema)

/*
            PARA O POSTMAN
    {
        "name": "Teste user",
        "cpf": 123.123.123-00,
        "idade": 22
    }

*/