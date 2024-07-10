import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "Smart CSV Online Tool",
  description:
    "This online tool is created to users to filter and merge their csv file with out writing any codes. This a powerful tool designed to help you manage your CSV files with ease. This guide will walk you through the steps to upload a CSV file, filter data based on string similarity, replace filtered results, and merge the changes back into the original CSV data.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://smartcsvtool.com/",
    site_name: "Smart-CSV-Online Tool",
    title: "Smart CSV Online Tool",
    description:
      "This online tool is created to users to filter and merge their csv file with out writing any codes. This a powerful tool designed to help you manage your CSV files with ease. This guide will walk you through the steps to upload a CSV file, filter data based on string similarity, replace filtered results, and merge the changes back into the original CSV data.",

    images: [
      {
        url: "https://smartcsvtool.com/path/to/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Smart CSV Online Tool",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@smartcsvtool",
    site: "@smartcsvtool",
    cardType: "summary_large_image",
  },
};

export default SEO;
