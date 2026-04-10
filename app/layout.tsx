import type { Metadata } from "next";
import { Noto_Sans_JP, Inter, Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";

import "./globals.css";
import AuthSyncProvider from "@/components/AuthSyncProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp"
});
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta",
});
const beVietnam = Be_Vietnam_Pro({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "Nihongo Learn 🎌",
  description: "Modern, görsel odaklı Japonca öğrenme platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} ${plusJakarta?.variable || ''} ${beVietnam?.variable || ''} font-sans antialiased min-h-screen flex flex-col`}>

        <AuthSyncProvider>
          {children}
        </AuthSyncProvider>
      </body>
    </html>
  );
}
