import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Food Crafts',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-gray-600 font-caveat">
        
        <div className="flex flex-col md:flex-row">
          <Navbar/>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
