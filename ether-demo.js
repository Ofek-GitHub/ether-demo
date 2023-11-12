import { ethers, formatEther, parseEther } from "ethers";
import dotenv from "dotenv";

dotenv.config();

const network = "homestead";

const provider = new ethers.InfuraProvider(network, process.env.INFURA_API_KEY);

const address = "0x48e68D52f2f23b1Ee4DC98a2625B27614Ed5CB5f";

const balance = await provider.getBalance(address);

let eth = formatEther(balance);

console.log(eth);

const txCount = await provider.getTransactionCount(address);
console.log(txCount);

const blockNumber = await provider.getBlockNumber();
const block = await provider.getBlock(blockNumber);
console.log(blockNumber);
console.log(block);

const fee = await provider.getFeeData();
console.log(fee);

const addr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const filter = {
  address: addr,
  topics: [ethers.id("Transfer(address,address,uint256)")],
};
provider.once(filter, (log) => {
  console.log(log);
});

const count = await provider.listenerCount(filter);
console.log(count);
