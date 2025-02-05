import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/lib/themeRegistry";
import EmotionCacheProvider from "@/lib/emotionCache";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tutti's Italian Market",
  description: "Hand-crafted Italian cuisine in Concord, NC",
};

export default function RootLayout({
  children,
}:  {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <EmotionCacheProvider>
       <ThemeRegistry>
        <Navbar />
        {children}
        </ThemeRegistry>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
