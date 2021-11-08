import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'JUTC',
    lpAddresses: {
      97: '0x1b9E9F0DCFaD211D68404a09aF612e4b89649CCe', // JUTC
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'JUTC',
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
    lpSymbol: 'JUTC-BNB',
    lpAddresses: {
      97: '0x326d775A70E1096053d26E8e0b48747ce23bCeAD',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'JUTC',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'JUTC-BUSD',
    lpAddresses: {
      97: '0xa4cfaba8443971bd4c9ece4912a772d64e4445cc',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'JUTC',
    tokenAddresses: {
      97: '0x1b9E9F0DCFaD211D68404a09aF612e4b89649CCe',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
