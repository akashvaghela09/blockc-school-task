const ethers = require("ethers");
const fs = require('fs');
const type = process.argv[2];
const prevWallet = "./my-modules/data/wallet.json";

const handleLoadWallet = async (para) => {
        if (fs.existsSync(prevWallet) === false) {
                console.log("You don't have any Wallet !!");
        } else {
                const provider = new ethers.getDefaultProvider(4);
                let balanceObj = await provider.getBalance(process.env.TEST_WALLET_ADDRESS);
                let balance = Number(ethers.utils.formatEther(balanceObj._hex))
                console.log(`Current Balance: ${balance} ETH`);
        }
}

module.exports = { handleLoadWallet }