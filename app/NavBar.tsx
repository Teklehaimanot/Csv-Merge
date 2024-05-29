import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between border-b p-4 bg-gray-100 shadow-md">
      <div>Logo</div>
      <ul className="flex flex-row space-x-6  items-center">
        <li>Home</li>
        <li>Csv Merge</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default NavBar;
