import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMA DARUL ULUM TEMPEH - PANDANWANGI",
  description:
    "Website resmi SMA DARUL ULUM TEMPEH - Menyediakan pendidikan Islam berkualitas dengan fasilitas modern dan program unggulan untuk membentuk generasi Islami",
  generator: "widiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
