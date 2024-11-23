# Hardhat Project

This project is built with Hardhat, a powerful Ethereum development environment for compiling, testing, deploying, and verifying smart contracts.

---

## **Getting Started**

### **Install Dependencies**
Before using the project, install all necessary dependencies:
```bash
npm install
```

### **Environment Setup**
Create a `.env` file in the root directory and add your environment variables:
```env
POLYGON_ALCHEMY_URL=https://polygon-mainnet.g.alchemy.com/v2/your_alchemy_api_key_here
POLYGON_PRIVATE_KEY=your_private_key_here
POLYGON_SCAN_API_KEY=your_polygon_api_key_here
```

Replace `your_private_key_here`, `your_polygon_api_key_here` and `your_alchemy_api_key_here` with your actual credentials.

---

## **Commands**

### **Compile Contracts**
Compile all the Solidity smart contracts in the project:
```bash
npx hardhat compile
```

### **Run Tests**
Run all the test cases to ensure your contracts work as expected:
```bash
npx hardhat test
```

### **Deploy Contracts**

#### Local Deployment:
Deploy contracts using the Ignition module on a local Hardhat network:
```bash
npx hardhat ignition deploy ./ignition/modules/Token.js
```

#### Polygon Network Deployment:
Deploy contracts to the Polygon network:
```bash
npx hardhat ignition deploy ./ignition/modules/Token.js --network polygon
```

### **Verify Contracts**
Verify deployed contracts on PolygonScan or other supported block explorers:
```bash
npx hardhat verify --network polygon ${contract_address}
```
Replace `${contract_address}` with the actual contract address.

---

## **Project Structure**
- **`contracts/`**: Contains Solidity contract files.
- **`test/`**: Includes unit tests for the contracts.
- **`scripts/`**: Scripts for deploying and interacting with contracts.
- **`ignition/modules/`**: Deployment modules for the Ignition plugin.

---

## **Supported Networks**
This project supports multiple networks. Update the `hardhat.config.js` file to configure additional networks. Current configurations include:
- Local Hardhat Network
- Polygon Network

---

## **Contributing**
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **References**
- [Hardhat Documentation](https://hardhat.org/docs)
- [Polygon Network](https://polygon.technology/)
- [Etherscan](https://etherscan.io/)
- [Ignition Documentation](https://hardhat.org/hardhat-runner/docs/other/ignition)
