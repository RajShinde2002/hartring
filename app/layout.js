import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Manrope } from 'next/font/google'
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="bg-[#0c1319]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
