import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter } from "next/font/google"
import { nohemi } from "./fonts/nohemi"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ozidia - Diseño y Desarrollo Web",
  description: "En Ozidia diseñamos y desarrollamos páginas web profesionales a medida, rápidas, atractivas y optimizadas para celulares. Creamos sitios pensados para generar más ventas y darle a tu negocio la presencia digital que necesita.",
}

// Fuente Inter como texto base del sitio (debe estar en scope del módulo)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nohemi.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {/* Líneas verticales globales a 42px del contenido (1220px de ancho) */}
        <div
          aria-hidden
          className="fixed inset-y-0 w-px bg-[#EDEDED] pointer-events-none hidden md:block z-[60]"
          style={{ left: "calc(50% - 610px - 42px)" }}
        />
        <div
          aria-hidden
          className="fixed inset-y-0 w-px bg-[#EDEDED] pointer-events-none hidden md:block z-[60]"
          style={{ left: "calc(50% + 610px + 42px)" }}
        />
        {/* Línea horizontal global a 50px del inicio (no sticky) */}
        <div aria-hidden className="absolute left-0 right-0 top-[50px] pointer-events-none hidden md:block z-[40]">
          <div className="w-full h-px bg-[#EDEDED]" />
        </div>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
