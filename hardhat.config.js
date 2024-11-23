/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { HARDHAT_PRIVATE_KEY,GANACHE_PRIVATE_KEY, POLYGON_ALCHEMY_URL, POLYGON_PRIVATE_KEY, POLYGON_SCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: `http://127.0.0.1:7545`,
      accounts: [GANACHE_PRIVATE_KEY],
    },
    hardhat_custom: {
      url: `http://127.0.0.1:8545`,
      accounts: [HARDHAT_PRIVATE_KEY],
    },
    polygon: {
      url: POLYGON_ALCHEMY_URL,
      accounts: [POLYGON_PRIVATE_KEY],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: POLYGON_SCAN_API_KEY
  }
};