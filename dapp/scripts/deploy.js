const hre = require("hardhat");

async function main() {

  const WhitelistContract = await hre.ethers.getContractFactory("WhitelistedAddress");
  const whitelist = await WhitelistContract.deploy(10);

  await whitelist.deployed();

  console.log("Whitelist deployed to:", whitelist.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });