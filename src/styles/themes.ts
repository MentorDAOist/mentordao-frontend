import { extendTheme as ChakraTheme } from '@chakra-ui/react'
import { lightTheme, Theme as RainbowKitTheme } from '@rainbow-me/rainbowkit'
// import { Press_Start_2P, Quantico } from 'next/font/google'

// export const pressStart2p = Press_Start_2P({
//   subsets: ['latin'],
//   weight: '400',
// })
// export const quantico = Quantico({ subsets: ['latin'], weight: '400' })

export const chakraTheme = ChakraTheme({
  fonts: {
    heading: `'Kharkiv Tone', sans-serif`,
    body: `'Kharkiv Tone', sans-serif`,
  },
  // colors: {},
  components: {
    Heading: {
      baseStyle: {
        color: 'blue',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
      a: {
        _hover: {
          color: 'blue',
          textDecoration: 'none !important',
        },
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1000px',
    xl: '1200px',
    '2xl': '1500px',
  },
})

const rainbowKitDefaultTheme = lightTheme()
export const rainbowKitTheme: RainbowKitTheme = {
  ...rainbowKitDefaultTheme,
  fonts: {
    body: `'Kharkiv Tone', sans-serif`,
  },
  colors: {
    ...rainbowKitDefaultTheme.colors,
    accentColor: 'blue',
  },
  // fonts: {
  //   body: quantico.style.fontFamily,
  // },
}
