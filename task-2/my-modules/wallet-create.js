const ethers = require("ethers");
const fs = require('fs');

const myWallet = ethers.Wallet.createRandom( [ options = {} ] );

let myData = {
    "address": myWallet.address,
    "mnemonic": myWallet.mnemonic.phrase,
    "privateKey": myWallet.privateKey,
    "publicKey": myWallet.publicKey
}

myData = JSON.stringify(myData);

const handleCreateWallet = () => {
    
    fs.writeFile('./my-modules/data/wallet.json', myData, (err) => {
        if (!err) {
            return  console.log("Wallet Created Successfully !!");
        } else {
            return console.log("Something went wrong");
        }
    });

}

module.exports = { handleCreateWallet }