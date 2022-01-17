import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'FHTN',
    lpAddresses: {
      97: '0x1b9E9F0DCFaD211D68404a09aF612e4b89649CCe', // JUTC
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'FHTN',
    tokenAddresses: {
      97: '0x1b9E9F0DCFaD211D68404a09aF612e4b89649CCe', // JUTC
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    // isTokenOnly:true
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'FHTN-BNB',
    lpAddresses: {
      97: '0x307188b928e425f7c63f189a032c3268a1e583f6',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'FHTN',
    tokenAddresses: {
      97: '0x1b9E9F0DCFaD211D68404a09aF612e4b89649CCe',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'FHTN-BUSD',
    lpAddresses: {
      97: '0x200f24f81f30ea8d97d90ccc09e4d2debaf81abc',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'FHTN',
    tokenAddresses: {
      97: '0x1b9E9F0DCFaD211D68404a09aF612e4b89649CCe',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
