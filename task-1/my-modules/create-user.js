const fs = require('fs');
const crypto = require("crypto");
const db = require("../db.json");
const tempEmail = process.argv[3];
const tempPass = process.argv[4];

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 1024 * 2,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: ''
    }
});

const hash = crypto.publicEncrypt(publicKey, Buffer.from(tempPass)).toString("base64")

const handleCreateUser = () => {
    let keyPair = {publicKey, privateKey}
    keyPair = JSON.stringify(keyPair);
    
    fs.writeFile('./keys/keyPair.json', keyPair, (err) => {
        if (!err) {
            console.log("Keys Generated Successfully !!");
            
            let userList = db.users;
            let newUser = {
                "email": tempEmail,
                "password": hash,
                "notes": [],
                "publicKey": publicKey
            }
            
            userList.push(newUser)
            
            newDB = {
                "users": userList
            }
            
            newDB = JSON.stringify(newDB)
            
            fs.writeFile("./db.json", newDB, (err) => {
                if(!err){
                    console.log("User added to database.")
                } else {
                    console.log("Something went wrong");
                }
            })
        } else {
            console.log("Something went wrong");
        }
    });
}



module.exports = { handleCreateUser }