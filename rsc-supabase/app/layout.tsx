import './globals.css'
import NavBar from './components/nav-bar'

export const metadata = {
  title: 'Next.js App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <NavBar />
        {children}
        </body>
    </html>
  )
}