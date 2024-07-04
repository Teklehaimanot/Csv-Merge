import React from "react";
import AdBanner from "./AdBanner";

const SideBar = () => {
  return (
    <div className="md:w-1/6">
      <AdBanner
        dataAdFormat="autorelaxed"
        dataFullWidthResponsive={true}
        dataAdSlot={`${process.env.NEXT_PUBLIC_AD_SLOT_1}`}
      />
    </div>
  );
};

export default SideBar;
