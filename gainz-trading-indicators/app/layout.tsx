import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAINZ | Your Ultimate Trading Indicator Resource",
  description: "Gainz Trading Indicators is your ultimate resource for a collection of technical indicators to enhance your trading strategies. Whether you're a beginner or an experienced trader, Gainz offers a range of indicators to help you make informed decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}