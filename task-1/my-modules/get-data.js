const db = require("../db.json")
const email = process.argv[3]
const privateKey = process.argv[4]
const crypto = require('crypto');

const handleGetData = () => {
    db.users.map((el) => {
        if(el.email === email){
            console.log("User Found");
            
            const userPass = el.password
            console.log(userPass);
            const result = crypto.privateDecrypt({key: privateKey,passphrase: ''}, userPass).toString()

            
            console.log(result);
        }
    })
}

module.exports = { handleGetData }