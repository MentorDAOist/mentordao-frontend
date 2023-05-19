import * as chains from 'wagmi/chains'

export const CHAINS_SUPPORTED = [
  chains.polygon,
  ...(process.env.NODE_ENV === 'development' ? [chains.polygonMumbai] : []),
]

export const DEFAULT_CHAIN =
  process.env.NODE_ENV === 'development' ? chains.polygonMumbai : chains.polygon
