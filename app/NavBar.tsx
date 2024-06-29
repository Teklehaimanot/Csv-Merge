import Link from "next/link";
import React from "react";
import { FaFileCsv } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="flex justify-between border-b p-4 bg-gray-800 shadow-md  text-white h-24">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex flex-row space-x-3">
          <FaFileCsv />
          <Link href="/" aria-label="Home - Smart CSV Tools">
            Smart CSV Tool
          </Link>
        </div>
        <ul className="flex flex-row space-x-6 items-center">
          <li>
            <Link href="/" className="hover:underline" aria-label="Home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline" aria-label="CSV Merge">
              CSV Merge
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline" aria-label="About">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
