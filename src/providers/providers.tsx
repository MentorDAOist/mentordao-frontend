import * as React from 'react'
import { ChakraProvider, RainbowKitProvider, WagmiProvider } from '@/providers'

export const Providers = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <ChakraProvider>
      <WagmiProvider>
        <RainbowKitProvider>{mounted && children}</RainbowKitProvider>
      </WagmiProvider>
    </ChakraProvider>
  )
}
