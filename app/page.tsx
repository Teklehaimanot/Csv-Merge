"use client";
import { ChangeEvent, ClipboardEvent, FormEvent, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import axios from "axios";

interface Result {
  [key: string]: string;
}

export default function Home() {
  const [csvContent, setCsvContent] = useState<string>("");
  const [columns, setColumns] = useState<string[]>([]);
  const [inputString, setInputString] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(50);
  const [results, setResults] = useState<string>("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const text = e.target?.result as string;
        setCsvContent(text);

        const lines = text.split("\n");
        if (lines.length > 0) {
          const headers = lines[0].split(",");
          setColumns(headers);
        }
      };

      reader.readAsText(file);
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
    const text = event.clipboardData.getData("text");
    setCsvContent(text);
    event.preventDefault();
  };

  const handleSearchSimilarity = async (event: FormEvent) => {
    event.preventDefault();
    try {
      console.log("clicked");
      const response = await axios.post(
        "http://localhost:5000/api/v1/csv/ColumnSimilarity",
        {
          csvContent,
          targetString: inputString,
          similarityThreshold: percentage / 100,
          columnName: "Name",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const csvData = jsonToCsv(response.data);
      setResults(csvData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const jsonToCsv = (json: Result[]) => {
    if (!json || json.length === 0) return "";

    const headers = Object.keys(json[0]).join(",");
    const rows = json.map((row) => {
      return Object.values(row).join(",");
    });
    return [headers, ...rows].join("\n");
  };

  console.log(results);
  return (
    <div className="flex flex-row  mx-5 space-x-5">
      <div className="w-1/6  bg-red-300"></div>
      <div className="w-5/6 ">
        <div className="flex flex-col  mx-5">
          <div className="w-2/5  ">
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
          </div>
          <div className="flex flex-row">
            <div className="w-2/5">
              <p className="text-slate-700 text-base mt-10">
                Or paste your CSV here
              </p>
              <textarea
                placeholder="paste your CSV here"
                value={csvContent}
                onPaste={handlePaste}
                onChange={(e) => setCsvContent(e.target.value)}
                rows={25}
                className="w-full border mt-2 p-3 text-blue-950 text-sm bg-gray-100 shadow-md"
              />
            </div>
            <div className="w-1/5 flex items-center   ">
              <div className="flex flex-col w-full mx-4">
                <form className="w-full" onSubmit={handleSearchSimilarity}>
                  <p className=" text-slate-700">Select Column Name</p>
                  <select className="w-full py-3 my-2 text-slate-700 border shadow-md bg-gray-100">
                    {columns?.map((col) => (
                      <option key={col} value={col}>
                        {col}
                      </option>
                    ))}
                  </select>
                  <div className="my-10">
                    <span className=" text-slate-700 my-2">
                      Match string similarity with a CSV column. Set a value and
                      a minimum similarity percentage.
                    </span>
                    <div className="flex flex-row my-3">
                      <input
                        type="text"
                        placeholder="Text to match"
                        className="border py-3 w-3/5 bg-gray-100 shadow-md px-2 "
                        onChange={(e) => setInputString(e.target.value)}
                        value={inputString}
                      />
                      <FaGreaterThan className=" m-auto w-1/5" />
                      <input
                        type="number"
                        className="border py-3 w-2/5 bg-gray-100 shadow-md px-3"
                        value={percentage}
                        onChange={(e) => setPercentage(Number(e.target.value))}
                      />
                    </div>
                    <div className="my-5">
                      <input
                        type="submit"
                        className="border rounded-md py-3 px-5 shadow-md  bg-blue-700 text-white hover:bg-blue-600"
                        value="Find"
                      />
                    </div>
                  </div>
                </form>
                <div>
                  <form>
                    <div className="my-2">
                      <p className=" text-slate-700">Replace with</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <input
                        type="text"
                        className="border py-3 w-3/5 bg-gray-100 shadow-md px-3"
                        placeholder="Text to replace"
                      />
                      <input
                        type="submit"
                        className=" border rounded-md px-3 py-3 shadow-md bg-blue-700 text-white hover:bg-blue-600 "
                        value="Replace"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-2/5  my-auto">
              <p className="text-slate-700 text-base mt-10">Result</p>
              <textarea
                placeholder="paste your CSV here"
                value={results}
                onChange={(e) => setResults(e.target.value)}
                rows={25}
                className="w-full border mt-2 p-3 text-blue-950 text-sm bg-gray-100 shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
