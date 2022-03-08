
# Blockchain Balance Monitor Discord

A bot that is able to retrieve the balance of one *Address* or *Smart Contract* in the Blockchain (we're using an RPC Node to connect with it) and check if something changes by time. When the balance will change the bot automatically will send a message in a channel. 

**Important!** A Discord App + Bot initialization is required, in order to user Discord client you need an initialized Bot. If you don't know how to do this read the documentation (Bots and App section):
https://discord.com/developers/docs/intro
## Utilites

We're using it in our team to:
- Track our Wallet address balance
- Track mint of our NFT collections, when someone mint we are notified really fast
- Track other collection balance in order to make comparisons

## Tech Stack

**Server:** Node, Discord.js, Truffle HD Wallet library
## Run Locally

Clone the project

```bash
  git clone https://github.com/0xBlend/balance-monitor-discord-bot
```

Go to the project directory

```bash
  cd balance-monitor-discord-bot
```

Install dependencies using NPM.

```bash
  npm install
```

Copy the .env.base in a new .env file and replace it with the correct values.

```bash
  cp .env.base .env
```

Start the app

```bash
  npm start
```
## Deployment

You can deploy it in a private server with node.js installed and running this command to start the process:

```bash
  npm start
```

Otherwise you can deploy it using Heroku with free dyno, you've to set in .env file the HEROKU_DEPLOY variable to 1 to make it works.

## Authors

- [@0xBlend](https://www.github.com/0xBlend)


## Roadmap

- Add integration with Smart Contracts type ERC721 to interact with them.
- Add REST interfaces that expose same informations about the balance.


## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)



## Support

For support or other implementations reach me out on Discord 0xBlend#9532.

