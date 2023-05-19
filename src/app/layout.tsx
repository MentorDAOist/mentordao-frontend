import { Providers } from '@/providers'

export const metadata = {
  title: 'MentorDAO',
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
