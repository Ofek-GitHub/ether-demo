import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.INFURA_API_KEY);

const network = "homestead";

const provider = new ethers.InfuraProvider(network, process.env.INFURA_API_KEY);

const blockNumber = await provider.getBlockNumber();

console.log(blockNumber);
