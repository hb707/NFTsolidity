const HbToken = artifacts.require("HbToken");
const SaleToken = artifacts.require("SaleToken");

module.exports = async (deployer) => {
  await deployer.deploy(HbToken, "test", "tst", "http://localhost:3500");
  const tokenInstance = await HbToken.deployed();
  await deployer.deploy(SaleToken, tokenInstance.address);
};
