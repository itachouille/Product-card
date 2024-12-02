import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Challenge Spikes",
  description: "Challenge Spikes by @0xEzis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundPattern />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
