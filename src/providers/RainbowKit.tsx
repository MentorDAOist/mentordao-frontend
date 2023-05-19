import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider as RainbowKitDefaultProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  injectedWallet,
  walletConnectWallet,
  coinbaseWallet,
  rainbowWallet,
  braveWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { CHAINS_SUPPORTED as chains } from '@/constants'
import { rainbowKitTheme } from '@/styles'

export const connectors = connectorsForWallets([
  {
    groupName: 'Popular',
    wallets: [
      metaMaskWallet({ chains, shimDisconnect: true }),
      injectedWallet({ chains, shimDisconnect: true }),
      walletConnectWallet({ chains }),
    ],
  },
  {
    groupName: 'More',
    wallets: [
      rainbowWallet({ chains, shimDisconnect: true }),
      coinbaseWallet({ appName: 'MentorDAO', chains }),
      braveWallet({ chains, shimDisconnect: true }),
      trustWallet({ chains, shimDisconnect: true }),
    ],
  },
])

export const RainbowKitProvider = ({ children }: React.PropsWithChildren) => (
  <RainbowKitDefaultProvider chains={chains} theme={rainbowKitTheme}>
    {children}
  </RainbowKitDefaultProvider>
)
