import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundPattern from "@/components/BackgroundPattern";
import { RenameModalProvider } from "@/contexts/RenameModalContext";

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
    <RenameModalProvider>
      <html lang="en">
        <body className={inter.className}>
          <BackgroundPattern />
          {children}
        </body>
      </html>
    </RenameModalProvider>
  );
}
