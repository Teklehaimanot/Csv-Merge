"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [csvContent, setCsvContent] = useState<string>("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const text = e.target?.result as string;
        setCsvContent(text);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-row mt-20 mx-5 space-x-5">
      <div className="w-1/6 bg-red-200">1</div>
      <div className="w-5/6 border">
        <div className="flex flex-row">
          <div className="w-1/3 p-5">
            <h1 className="text-blue-700 text-2xl font-bold w-full my-5">
              CSV-MERGE
            </h1>
            <p className="text-slate-700 text-base my-3">
              To get started, upload or paste your data from Excel (saved as CSV
              or TSV).
            </p>
            <p className="text-slate-700 text-base mt-5">Upload a CSV file</p>
            <input
              className="border border-gray-300 my-2  py-2 px-4 block w-full focus:outline-none focus:border-blue-400 bg-gray-100 shadow-md"
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
            />
            <p className="text-slate-700 text-base mt-10">
              Or paste your CSV here
            </p>
            <textarea
              placeholder="paste your CSV here"
              value={csvContent}
              rows={40}
              readOnly
              className="w-full border mt-2 p-3 text-blue-950 text-sm bg-gray-100 shadow-md"
            />
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
}
