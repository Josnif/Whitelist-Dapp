require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const API_KEY = process.env.ALCHEMY_API;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
  // etherscan: {
  //   apiKey: `${ETHERSCAN_API_KEY}`
  // }
};