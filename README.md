# Sign Basic Binance Beacon Chain Tansaction

# Environment variables
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|BINANCE_CHAIN_PUBLIC_URL | Binance Beacon Chain Public API URL | "https://dex.binance.org" |
|BINANCE_CHAIN_NETWORK | Binance Beacon Chain Network | 'testnet' |
|WALLET_PRIVATE_KEY | Wallet private key which is sending the asset ||
|TX_FROM_ADDRESS | Transaction from address ||
|TX_TO_ADDRESS | Transaction to address ||
|TX_SYMBOL | Transaction asset to send symbol | "BUSD-BD1" |]
|TX_AMOUNT | Transaction amount of asset e.g. Amount of BUSD-BD1 to send in transction | "0.1" |

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 19.6.0

# Getting started

- TODO: Write how to install and generate a signed transaction here

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies |
| **src**                  | Contains  source code that will be compiled to the dist dir |
| **src**/script.js        | Entry point to the script |
| package.json             | Contains npm dependencies |
