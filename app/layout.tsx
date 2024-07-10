import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AdSense from "./components/AdSense";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart CSV Online Tool",
  description:
    "This online tool is created to users to filter and merge their csv file with out writing any codes. This a powerful tool designed to help you manage your CSV files with ease. This guide will walk you through the steps to upload a CSV file, filter data based on string similarity, replace filtered results, and merge the changes back into the original CSV data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://smartcsvtool.com/",
    name: "Smart-CSV-Online Tool",
    description: metadata.description,
    publisher: {
      "@type": "kelal tech",
      name: "Smart CSV",
    },
  };
  return (
    <html lang="en">
      <head>
        {/* <DefaultSeo
          title="Smart CSV Online Tool"
          description="This online tool is created to users to filter and merge their csv file with out writing any codes. This a powerful tool designed to help you manage your CSV files with ease. This guide will walk you through the steps to upload a CSV file, filter data based on string similarity, replace filtered results, and merge the changes back into the original CSV data."
        /> */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://smartcsvtool.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${metadata.title}`} />
        <meta property="og:description" content={`${metadata.description}`} />
        <meta property="og:url" content="https://smartcsvtool.com/" />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${metadata.title}`} />
        <meta name="twitter:description" content={`${metadata.description}`} />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
