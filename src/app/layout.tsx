import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/lib/themeRegistry";
import EmotionCacheProvider from "@/lib/emotionCache";

export const metadata: Metadata = {
  title: "Tutti's Italian Market",
  description: "Hand-crafted Italian cuisine in Concord, NC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EmotionCacheProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
