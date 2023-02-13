require('dotenv').config();

const {
    BncClient,
    crypto
} = require("@binance-chain/javascript-sdk");

const { Big } = require('big.js');

const client = new BncClient(process.env.BINANCE_CHAIN_PUBLIC_URL ?? 'https://dex.binance.org/');

client.initChain().then((res) => {
    const client = res;

    client.chooseNetwork(process.env.BINANCE_CHAIN_NETWORK ?? 'testnet');
    client.setPrivateKey(process.env.WALLET_PRIVATE_KEY);

    const fromAddress = process.env.TX_FROM_ADDRESS;
    const toAddress = process.env.TX_TO_ADDRESS;
    // Replace with the Binance Chain symbol for BUSD (e.g., BUSD-BD1)
    const symbol = process.env.TX_SYMBOL ?? 'BUSD-BD1';

    // Get the account information for the sender to get account sequence
    client.getAccount(fromAddress).then((res) => {
        const account = res.result;

        const accCode = crypto.decodeAddress(fromAddress)
        const toAccCode = crypto.decodeAddress(toAddress)

        amount = new Big(process.env.TX_AMOUNT ?? '0.1');
        amount = Number(amount.mul(Math.pow(10, 8)).toString())

        const coin = {
            denom: symbol,
            amount: amount,
        }

        const msg = {
            inputs: [
                {
                    address: accCode,
                    coins: [coin],
                },
            ],
            outputs: [
                {
                    address: toAccCode,
                    coins: [coin],
                },
            ],
            aminoPrefix: '2A2C87FA',
        }

        const signMsg = {
            inputs: [
                {
                    address: fromAddress,
                    coins: [
                        {
                            amount: amount,
                            denom: symbol,
                        },
                    ],
                },
            ],
            outputs: [
                {
                    address: toAddress,
                    coins: [
                        {
                            amount: amount,
                            denom: symbol,
                        },
                    ],
                },
            ],
        }

        client._prepareTransaction(
            msg,
            signMsg,
            fromAddress,
            account.sequence,
            ''
        ).then((res) => {
            const tranasction = res;
            const signedTx = tranasction.serialize();

            console.log('Signed transction: ');
            console.log(signedTx);
        }).catch((error) => {
            console.log('Failed to prepare transaction:');
            console.log(error);
        });

    }).catch((error) => {
        console.error("Failed to get account information.");
        console.error(error);
    });
});
