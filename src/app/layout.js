'use client'
import { jost } from "@/utils/jost";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import { UserProvider } from "@/context";
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ jost.className}>
      <UserProvider>
        <Navbar/>
        {children}
        <Footer/>
      </UserProvider>
      <Toaster />
      </body>
    </html>
  );
}
