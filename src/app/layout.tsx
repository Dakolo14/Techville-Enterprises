import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationLoader from "@/components/NavigationLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techville Enterprises - Digital Infrastructure & Power Solutions",
  description:
    "Techville Enterprises - Delivering end-to-end digital infrastructure and solar power solutions across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <NavigationLoader />
        {children}
      </body>
    </html>
  );
}
