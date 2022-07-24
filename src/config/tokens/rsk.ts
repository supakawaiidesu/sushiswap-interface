import { ChainId, Token } from '@supakawaiidesu/core-sdk'

export const DAI = new Token(ChainId.RSK, '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.RSK, '0xb44a9b6905af7c801311e8f4e76932ee959c663c', 18, 'USDC', 'USD Coin')
export const WBTC = new Token(ChainId.RSK, '0x967f8799af07df1534d48a95a5c9febe92c53ae0', 18, 'WBTC', 'Wrapped rBitcoin')
export const WETH = new Token(ChainId.RSK, '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d', 18, 'WETH', 'Wrapped Ether')
