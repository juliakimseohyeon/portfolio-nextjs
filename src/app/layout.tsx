import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--body-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julia Kim Portfolio",
  description: "Hello, I'm Julia, a pixel Picasso turned nomadic coder!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
