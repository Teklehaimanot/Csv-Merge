import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AdSense from "./components/AdSense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSV-Smart-Online Tool",
  description:
    "This tool is created to users to merge their csv file with out writing any codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense pId={`${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`} />
      </head>
      <body className={inter.className}>
        <NavBar />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
