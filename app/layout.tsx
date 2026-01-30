import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Father & Son Lawn and Landscaping | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for Father & Son Lawn and Landscaping. Professional lawn care and landscaping services in Parkland, Coral Springs & Tamarac.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Byldr",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23059669' width='100' height='100' rx='15'/><text x='50' y='70' text-anchor='middle' font-size='55' fill='white'>🌿</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Father & Son Lawn and Landscaping | Free Mockup",
    description: "A free website redesign mockup for Father & Son Lawn and Landscaping, created by Ryan Cwynar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
