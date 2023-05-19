import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { DEFAULT_CHAIN, CHAINS_SUPPORTED } from '@/constants'
import { connectors } from '@/providers/RainbowKit'

const { chains, publicClient, webSocketPublicClient } = configureChains(CHAINS_SUPPORTED, [
  jsonRpcProvider({
    rpc: () => ({
      http: DEFAULT_CHAIN.rpcUrls.default.http[0],
    }),
  }),
  publicProvider(),
])

const config = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export const WagmiProvider = ({ children }: React.PropsWithChildren) => (
  <WagmiConfig config={config}>{children}</WagmiConfig>
)
