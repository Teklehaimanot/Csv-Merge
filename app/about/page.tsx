import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";

const page = () => {
  return (
    <div className="h-screen flex">
      <div className=" flex w-2/3 mx-auto mt-20 items-center h-1/3 p-5 space-x-5 border shadow-md">
        <div className=" border border-white">
          <Logo />
        </div>
        <div className=" text-gray-700 border border-white  p-5">
          <p className=" mb-5 text-gray-700">
            Welcome to Smart CSV Tool! We offer an intuitive tool for managing
            and manipulating CSV files easily.
          </p>
          <p className=" mb-5 text-gray-700">
            We created this website to create tools that are usefull for
            researchers and office workers. Our goal is to simplify CSV file
            management and provide users with powerful features to handle data
            efficiently.
          </p>
          <p className="mb-5 text-gray-700">
            For any questions or feedback, please contact us at{" "}
            <Link
              href="mailto:kelaltech24@gmail.com"
              className="text-blue-500 underline"
            >
              kelaltech24@gmail.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
