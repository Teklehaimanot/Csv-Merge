import Link from "next/link";
import React from "react";
import { FaTelegram } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
import Logo from "./components/Logo";
const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full bg-gray-700 shadow-md  text-white min:h-80 flex items-center">
        <div className="container mx-auto flex md:flex-row flex-col space-y-5 justify-between items-start my-10 w-2/3">
          <div className=" flex md:flex-row flex-col ">
            <div>
              <Logo />
            </div>
            <div>
              <h2 className=" text-xl font-bold my-3 text-blue-500">
                Kelal Tech
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <strong>Country:</strong> Addis Ababa, Ethiopia
                </li>
                <li>
                  <strong>Telephone:</strong> +251 712284904 / +251 903190266
                </li>
                <li>
                  <strong>E-mail:</strong> kelaltech24@gmail.com
                </li>
                <li className="flex items-center space-x-2">
                  <strong>Telegram:</strong>
                  <a href="https://t.me/kelal_tech">@kelal_tech</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className=" text-xl font-bold my-3 text-blue-500">Tools</h2>
            <ul className="text-sm space-y-2">
              <li className="flex items-center space-x-2 hover:text-gray-400">
                <Link href="/">CSV Filter & Merger</Link>
              </li>
              {/* <li className="flex items-center space-x-2 hover:text-gray-400">
                <Link href="/"> CSV Compare </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h2 className=" text-xl font-bold my-3 text-blue-500">contact</h2>
            <ul className="text-sm space-y-2 items-center ">
              <li className="flex items-center space-x-2 hover:text-gray-400 ">
                <Link href="https://t.me/kelal_tech24">
                  <FaTelegram size={36} />
                </Link>
              </li>
              {/* <li className="flex items-center space-x-2 hover:text-gray-400 ">
                <Link href="/">
                  <FaFacebook size={36} />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-gray-800 h-24 text-white shadow-md">
        <div className="flex justify-between w-2/3 mx-auto  pt-5">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Smart CSV Tool. All rights
            reserved.
          </div>
          <div className=" text-sm">
            Designed and Developed by{" "}
            <Link className=" text-blue-500" href="https://t.me/kelal_tech">
              kelal tech
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
