const dotenv = require('dotenv').config();
const http = require('http');

const { getContractBalance } = require('./utils/web3.functions');
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); //create new client

// Discord on: Ready
client.on('ready', async () => {
    console.log('Discord client is ready');
    console.log(`Logged in as ${client.user.tag}!`);
});

// Discord on: New message
client.on('messageCreate', async msg => {
    switch (msg.content) {
        case "!watch:my-contract":
            msg.channel.send("You are now subscribed to My Contract!");
            getContractBalance(msg, process.env.CONTRACT_ADDRESS_0, process.env.RPC_NODE_0, process.env.WALLET_PK)
            break;
    }
})

// Heroku Listener workaround for Dyno shutdown
if (process.env.HEROKU_DEPLOY)
    http.createServer().listen(process.env.PORT || 6000, () => {
        client.login(process.env.CLIENT_TOKEN);
        console.log('Heroku app is listening')
    })
else
    // Just login using BOT Token
    client.login(process.env.CLIENT_TOKEN);