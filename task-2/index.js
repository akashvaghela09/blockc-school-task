const type = process.argv[2];
const { handleCreateWallet } = require("./my-modules/wallet-create");
const { handleLoadWallet } = require("./my-modules/wallet-import");
const { handleTransaction } = require("./my-modules/wallet-send-fund");
require("dotenv").config();

if(type==="create"){
    handleCreateWallet(type)
} else if (type==="load"){
    handleLoadWallet(type)
} else if (type==="send"){
    handleTransaction()
} else {
    console.log("Provide any Para");
}