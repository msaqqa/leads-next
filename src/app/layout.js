"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
// Import Swiper styles
import "swiper/css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
