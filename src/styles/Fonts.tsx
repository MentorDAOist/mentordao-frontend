import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Kharkiv Tone';
        font-style: normal;
        src: url(/assets/fonts/KharkivTone.ttf) format('ttf');
      }
      `}
  />
)
