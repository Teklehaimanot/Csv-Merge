import Link from "next/link";
import React from "react";
import { FaFileCsv } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex justify-between border-b p-4 bg-gray-800 shadow-md  text-white h-24">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center">
        <div className="text-xl font-bold flex flex-row space-x-3">
          <FaFileCsv />
          <Link href="/" aria-label="Home - Smart CSV Tools">
            Smart CSV Tool
          </Link>
        </div>
        <ul className="flex flex-row md:space-x-6 items-center space-x-10">
          <li>
            <Link href="/" className="hover:underline" aria-label="Home">
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/" className="hover:underline" aria-label="CSV Merge">
              CSV Merge
            </Link>
          </li> */}
          <li>
            <Link href="/about" className="hover:underline" aria-label="About">
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Teklehaimanot"
              className="hover:underline"
              aria-label="About"
            >
              <FaGithub size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
