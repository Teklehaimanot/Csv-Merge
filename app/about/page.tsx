import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex">
      <div className=" m-auto space-y-2 flex flex-col items-center">
        <h2 className=" text-2xl">This page is on development</h2>
        <Link className=" text-blue-500" href={"/"}>
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default page;
