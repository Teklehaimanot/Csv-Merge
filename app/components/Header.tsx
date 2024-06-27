import React from "react";
interface HeaderProps {
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: any;
}
const Header: React.FC<HeaderProps> = ({ handleFileUpload, errors }) => {
  return (
    <div className="flex justify-between">
      <div className="w-2/5  ">
        <h1 className="text-blue-700 text-2xl font-bold w-full my-5">
          Smart CSV Filter & Merger
        </h1>
        <p className="text-slate-700 text-base my-3">
          To get started, upload or paste your data from Excel (saved as CSV or
          TSV).
        </p>
        <p className="text-slate-700 text-base mt-5">Upload a CSV file</p>
        <input
          className="border border-gray-300 my-2  py-2 px-4 block w-full focus:outline-none focus:border-blue-400 bg-gray-100 shadow-md"
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
        />
      </div>
      <div className=" m-auto text-red-400">
        <span>{errors}</span>
      </div>
    </div>
  );
};

export default Header;
