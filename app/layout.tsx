import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  // weight: ["400"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Gebya Plus — Create Your Store. Sell Anywhere",
  description:
    "Gebya+ lets any Ethiopian seller create a personal online store, list products, and accept TeleBirr payments — all in minutes.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth.api.getSession({headers: await headers()})
  console.log("sessions from root layout",session)
  return (
    <html lang="en" className={`dark ${jetBrainsMono.variable}`}>
      <body className={`dark ${jetBrainsMono.className}`}>
        {children}
      </body>
    </html>
  );
}
