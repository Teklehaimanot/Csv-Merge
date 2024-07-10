import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className=" flex w-2/3 mx-auto mt-20 items-center p-5 space-x-5 shadow-sm">
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
          {/* <ContactForm /> */}
        </div>
      </div>
      <div className=" w-2/3 py-10  mx-auto">
        <p>
          You can use this form if you have questions about my tools, to report
          a malfunction or any other question.To report a problem on one of the
          tools, you can also leave a comment on the page of this one.
        </p>
      </div>
      <div className=" w-2/3  mx-auto  mb-20 shadow-sm ">
        <div className="bg-gray-500 text-white  font-bold p-2 flex">
          <strong className="mx-auto text-2xl">Contact me</strong>
        </div>
        <div className="p-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
