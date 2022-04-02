import whitelist from './contract.json';

export const WHITELIST_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export const abi = whitelist.abi;
