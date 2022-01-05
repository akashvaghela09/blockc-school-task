const crypto = require('crypto');
const CryptoJS = require("crypto-js");

const salt = "Random string for salt";
const data1 = [111, 222, 333];
const data2 = {
    "name": "John Doe",
    "age": 30
};

// Encrypt
let hash1 = CryptoJS.AES.encrypt(JSON.stringify(data1), salt).toString()
let hash2 = CryptoJS.AES.encrypt(JSON.stringify(data2), salt).toString()

// console.log(hash1);
// console.log(hash2);


// Decrypt
let bytes1 = CryptoJS.AES.decrypt(hash1, salt)
let originalData1 = JSON.parse(bytes1.toString(CryptoJS.enc.Utf8))

let bytes2 = CryptoJS.AES.decrypt(hash2, salt)
let originalData2 = JSON.parse(bytes2.toString(CryptoJS.enc.Utf8))

// console.log(originalData1);
// console.log(originalData2);


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

const data3 = "Random Text string ... Line 1 ... for Asymetric Encryption ..."
const hash3 = crypto.publicEncrypt(publicKey, Buffer.from(data3))
const originalData3 = crypto.privateDecrypt({key: privateKey,passphrase: ''}, hash3).toString()

// console.log(originalData3)