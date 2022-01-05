const type = process.argv[2];
const { handleCreateUser } = require("./my-modules/create-user")
const { handleGetData } = require("./my-modules/get-data");

if(type==="create"){
    handleCreateUser()
} if (type ==="get"){
    handleGetData()
}