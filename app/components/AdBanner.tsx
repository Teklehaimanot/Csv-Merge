"use client";

import React, { useEffect } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        if (
          (window as any).adsbygoogle &&
          (window as any).adsbygoogle.loaded === false
        ) {
          ((window as any).adsbygoogle =
            (window as any).adsbygoogle || []).push({});
        } else {
          console.log("Adsbygoogle already initialized or unavailable.");
        }
      } catch (error: any) {
        console.error("Adsbygoogle push error: ", error.message);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5151577089306501"
      data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()}
    ></ins>
  );
};

export default AdBanner;
