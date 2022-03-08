const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');

/**
 * It fetches the balance of the contract every 3 seconds and sends a message to the channel if the
 * balance changes
 * @param msg - The message object that triggered the command.
 * @param contractAddress - The address of the contract you want to monitor.
 * @param rpcNode - The URL of the node you want to connect to.
 * @param walletPk - The private key of the user.
 */
const getContractBalance = async (msg, contractAddress, rpcNode, walletPk) => {
    const provider = new Provider(walletPk, rpcNode);
    const web3 = new Web3(provider);
    let balance;

    setInterval(async () => {
        const fetchedBalance = await web3.eth.getBalance(contractAddress);
        if (!balance) {
            balance = fetchedBalance;
            msg.channel.send(`@everyone Bot initialized!`)
            msg.channel.send(`The actual Balance of the contract is: ${Web3.utils.fromWei(balance, 'ether')} ETH`)
                .catch(console.error);
            return;
        }

        if (balance != fetchedBalance) {
            msg.channel.send(`@everyone Bot found a new event!`)
            msg.channel.send(`New balance is ${Web3.utils.fromWei(balance, 'ether')} ETH`)
        }
    }, 3 * 1000); //every 3 seconds
}

module.exports = {
    getContractBalance
}