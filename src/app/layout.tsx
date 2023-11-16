import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Building My Portfolio',
  description: 'Crie seu Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-neutral-900 text-neutral-200 h-screen">{children}</body>
    </html>
  )
}
