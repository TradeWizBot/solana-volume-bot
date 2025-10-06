const { Connection } = require("@solana/web3.js");
const mongoose = require('mongoose');
require('dotenv').config();

const config = {
    rpc: 'https://solana-mainnet.core.chainstack.com/{endpoint_url}',
    tax_wallet: 'H4mu49XfHpvpMzuGWuKWGgDi6frS44TubxFbwmefy1ed',
    poolTax: 1, // 5%
    botTax: 0.001, // .01%
    walletLimit: 4
}

const connection = new Connection(config.rpc, 'confirmed');

// MongoDB connection using Mongoose
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = {connection, config, connectDB};
