"use client";
import { Suspense } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
// Import Swiper styles
import "swiper/css";
import dynamic from "next/dynamic";
// import LottieHandler from "@/feedback/lottieHandler/LottieHandler";

const LottieHandler = dynamic(
  () => import("@/feedback/lottieHandler/LottieHandler"),
  { ssr: true }
);

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
          <Suspense
            fallback={<LottieHandler type="loading" message="loading..." />}
          >
            <>
              <Header />
              {children}
              <Footer />
            </>
          </Suspense>
        </>
      </body>
    </html>
  );
}
