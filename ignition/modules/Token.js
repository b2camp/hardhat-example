const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("Token", [100000]);

  return { token };
});

module.exports = TokenModule;