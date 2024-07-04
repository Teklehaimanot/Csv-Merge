import Script from "next/script";
import { pid } from "process";
import React from "react";

type AdSenseType = {
  pId: string;
};

const AdSense = ({ pId }: AdSenseType) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default AdSense;
