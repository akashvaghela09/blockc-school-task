const ethers = require("ethers");
const { privateKey, publicKey, address } = require("./data/wallet.json")

const handleTransaction = async (para) => {
    console.log("Fund Transfer Started ...");
    console.log("");
    
    const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/88b8fac85a2c4e6abe7f05a6663dac23", 4);
    let myWallet = ethers.Wallet.fromMnemonic(process.env.MAIN_WALLET_MNEMONIC)
    let currentFundObj = await provider.getBalance(myWallet.address)
    let currentFund = Number(ethers.utils.formatEther(currentFundObj._hex))
    
    console.log("Current Fund: ", currentFund);
    
    let gasFeesObj = await provider.getGasPrice()
    let gasPrice = gasFeesObj._hex
    
    let transferAmountObj = ethers.BigNumber.from(ethers.utils.parseEther("0.01"))
    let transferAmount = transferAmountObj._hex
    
    let mySigner = myWallet.connect(provider)
    let myNonce = await mySigner.getTransactionCount()
    
    let txPara = {
        "from": myWallet.address,
        "to": process.env.TEST_WALLET_ADDRESS,
        "value": transferAmount,
        "gasPrice": gasPrice,
        "gasLimit": "0xc350",
        "nonce": myNonce,
        "data": "0x00"
    }
    
    const tx = await mySigner.sendTransaction(txPara)
    
    console.log("");
    console.log("Fund Transfered Successfully !!");
    console.log("");
}

module.exports = { handleTransaction }