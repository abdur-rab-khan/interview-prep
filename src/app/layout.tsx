import type { Metadata } from "next";
import { Fraunces, Fira_Code } from "next/font/google";

import "./globals.css";

const frauncesSans = Fraunces({
  variable: "--font-fraunces-sans",
  subsets: ["latin"],
});

const firaCodeSans = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Preparation",
  description: "Doing interview preparation for react, javascript, node",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${frauncesSans.variable} ${firaCodeSans.variable} h-full antialiased`}
    >
      <body className="font-sans bg-slate-950">{children}</body>
    </html>
  );
}
