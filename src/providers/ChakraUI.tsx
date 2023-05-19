import { Fonts, chakraTheme } from '@/styles'
import { ChakraProvider as ChakraDefaultProvider } from '@chakra-ui/react'

export const ChakraProvider = ({ children }: React.PropsWithChildren) => (
  <ChakraDefaultProvider theme={chakraTheme}>
    {
      <>
        <Fonts /> {children}
      </>
    }
  </ChakraDefaultProvider>
)
