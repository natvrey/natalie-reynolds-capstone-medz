import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BottomNav } from "@/components/bottom-nav"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Medz+ | Emergency Medical Companion",
  description:
    "Your emergency medical companion. Fast access to help, contacts, and first aid.",
}

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="mx-auto flex min-h-screen max-w-lg flex-col bg-background">
          <main className="flex-1 pb-20">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
