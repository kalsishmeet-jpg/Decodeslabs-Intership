import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OtakuPulse Anime Hub | Collectibles, Drops & News",
  description:
    "The premier cyberpunk anime action figure and news hub. Real-time pre-order alerts, high-end scale statue drops, simulcast schedules, and collector community.",
  keywords: [
    "OtakuPulse",
    "Anime Figures",
    "Jujutsu Kaisen",
    "Chainsaw Man",
    "Cyberpunk Edgerunners",
    "Statue Drops",
    "Anime News",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen bg-[#111415] text-[#e1e2e4] antialiased selection:bg-[#8b5cf6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
