// requires
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = express.Router()
const { MongoClient } = require('mongodb');
const dotenv = require("dotenv").config()

const app = express();

const env = process.env;

const {
    MONGO_URI,
    PORT
} = env;

async function main(){
    const client = new MongoClient(MONGO_URI);
    try {await client.connect();console.log('DB ON')} catch (e) {console.error(e);}}
main().catch(console.error);

// Middlewares

app.use(express.static('public'))
app.use(morgan("dev"));
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/json" }));
app.use(router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}. http://localhost:${PORT}/`)
})

return app;

// async function main(){
//     /**
//         * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//         * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//         */
//     const uri = "mongodb+srv://matkvz:K0HKCD9qd8nhCFYw@master.rrj0cix.mongodb.net/?retryWrites=true&w=majority";
     
    
//     const client = new mongoose(uri);
     
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
     
//         // Make the appropriate DB calls
//         await listDatabases(client);
     
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
    
// main().catch(console.error);
