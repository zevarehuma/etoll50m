import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'eToll50M — Toll Payment',
  description: 'Pay your eToll50M trip online. Check tariffs, FAQs, and contact support.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(60%_80%_at_10%_10%,#12203a_0%,#0b1221_55%)] text-slate-100">
        {children}
      </body>
    </html>
  )
}