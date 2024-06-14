"use client";
import { ChangeEvent, ClipboardEvent, FormEvent, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import axios from "axios";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

interface Result {
  [key: string]: string;
}

export default function Home() {
  const [csvContent, setCsvContent] = useState<string>("");
  const [columns, setColumns] = useState<string[]>([]);
  const [inputString, setInputString] = useState<string>("");
  const [percentage, setPercentage] = useState<number>(50);
  const [results, setResults] = useState<string>("");
  const [finalResults, setFinalResults] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [replacingText, setReplacingText] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [mergedDownloadUrl, setMergedDownloadUrl] = useState<string>("");
  const [mergedCsvContent, setMergedCsvContent] = useState<string>("");

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const text = e.target?.result as string;
        const parsedText = parsePastedText(text);
        setCsvContent(parsedText);

        const lines = text.split("\n");
        if (lines.length > 0) {
          const parsedHeaders = parsePastedText(lines[0]);
          const headers = parsedHeaders.split(",");
          setColumns(headers);
        }
      };

      reader.readAsText(file);
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLTextAreaElement>) => {
    const text = event.clipboardData.getData("text");
    const parsedText = parsePastedText(text);
    setCsvContent(parsedText);
    event.preventDefault();
  };

  const parsePastedText = (text: string): string => {
    const lines = text.split("\n");
    const parsedLines = lines.map((line) => {
      return line
        .split(",")
        .map((value) => {
          if (value.startsWith('"') && value.endsWith('"')) {
            return value.slice(1, -1);
          }
          return value;
        })
        .join(",");
    });
    return parsedLines.join("\n");
  };

  const handleSearchSimilarity = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (!inputString || !csvContent || !selectedOption) {
        setError(
          "All CSV content, target string, and column name are required."
        );
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/v1/csv/ColumnSimilarity",
        {
          csvContent,
          targetString: inputString,
          similarityThreshold: percentage / 100,
          columnName: selectedOption,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const csvData = jsonToCsv(response.data);
      setResults(csvData);
      createDownloadLink(csvData);
    } catch (error: any) {
      setError(error.response.data);
      console.error("Error:", error);
    }
  };

  const hanldingReplaceText = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (!replacingText || !results || !selectedOption) {
        setError(
          "All CSV result, replacing string, and column name are required."
        );
        return;
      }
      const response = await axios.post(
        "http://localhost:5000/api/v1/csv/replaceStrings",
        {
          csvResults: results,
          replacingString: replacingText,
          columnName: selectedOption,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const csvData = jsonToCsv(response.data);
      setResults(csvData);
      createDownloadLink(csvData);
    } catch (error: any) {
      setError(error.response.data);
      console.log(error);
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

  const createDownloadLink = (csv: string) => {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  };

  const handleMergeCsv = () => {
    // Parse original CSV content into an array of objects
    const originalData = csvContent
      .trim()
      .split("\n")
      .map((row) => row.split(","));
    const originalHeaders = originalData[0];
    const originalRows = originalData.slice(1);

    // Parse results CSV into an array of objects
    const updatedData = results
      .trim()
      .split("\n")
      .map((row) => row.split(","));
    const updatedHeaders = updatedData[0];
    const updatedRows = updatedData.slice(1);

    // Assuming the first column is the unique key for merging
    const keyIndex = originalHeaders.indexOf(updatedHeaders[0]);

    // Create a mapping of unique key to updated row
    const updatedMap = updatedRows.reduce((acc, row) => {
      acc[row[0]] = row;
      return acc;
    }, {} as { [key: string]: string[] });

    // Merge the original and updated data
    const mergedRows = originalRows.map((row) => {
      const key = row[keyIndex];
      if (updatedMap[key]) {
        return updatedMap[key];
      }
      return row;
    });

    // Combine headers and rows to form a CSV
    const mergedCsv = [originalHeaders, ...mergedRows]
      .map((row) => row.join(","))
      .join("\n");

    setMergedCsvContent(mergedCsv);
    createDownloadLinkForMergedCsv(mergedCsv);
  };

  const createDownloadLinkForMergedCsv = (csv: string) => {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    setMergedDownloadUrl(url);
  };

  console.log(finalResults);
  return (
    <div className="flex flex-row  mx-5 space-x-5">
      <SideBar />
      <div className="w-5/6 ">
        <div className="flex flex-col  mx-5">
          <Header handleFileUpload={handleFileUpload} errors={error} />
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
                  <p className=" text-slate-700">
                    Select the column name you want to match against:
                  </p>
                  <select
                    className="w-full py-3 my-2 text-slate-700 border shadow-md bg-gray-100"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {columns?.map((col) => (
                      <option key={col} value={col}>
                        {col}
                      </option>
                    ))}
                  </select>
                  <div className="my-10">
                    <span className=" text-slate-700 my-2">
                      Match string similarity with a CSV column. Enter a text to
                      match and set a minimum similarity percentage:
                    </span>
                    <div className="flex flex-row my-3">
                      <input
                        type="text"
                        placeholder="Target String"
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
                {results && (
                  <div>
                    <form onSubmit={hanldingReplaceText}>
                      <div className="my-2">
                        <p className=" text-slate-700">Replace all with</p>
                      </div>
                      <div className="flex flex-row justify-between">
                        <input
                          type="text"
                          className="border py-3 w-3/5 bg-gray-100 shadow-md px-3"
                          placeholder="String to replace"
                          onChange={(e) => setReplacingText(e.target.value)}
                          value={replacingText}
                        />
                        <input
                          type="submit"
                          className=" border rounded-md px-3 py-3 shadow-md bg-blue-700 text-white hover:bg-blue-600 "
                          value="Replace"
                        />
                      </div>
                    </form>
                    <div className="w-1/5 flex items-center">
                      <div className="flex flex-col w-full mx-5">
                        <button
                          onClick={handleMergeCsv}
                          className="mt-5 bg-blue-500 text-white p-2 rounded shadow"
                        >
                          Merge CSV
                        </button>
                        {mergedDownloadUrl && (
                          <a
                            href={mergedDownloadUrl}
                            download="merged.csv"
                            className="mt-3 text-blue-700 underline"
                          >
                            Download Merged CSV
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-2/5  my-auto">
              <p className="text-slate-700 text-base mt-10">Result</p>
              <textarea
                placeholder="paste your CSV here"
                value={results}
                onChange={(e) => setResults(e.target.value)}
                rows={25}
                className="w-full border mt-2 p-3 text-blue-950 text-sm bg-gray-100 shadow-md mb-3"
              />
              {downloadUrl && results && (
                <a
                  href={downloadUrl}
                  download="results.csv"
                  className=" border items-end py-2 px-3 mb-5 bg-blue-700 text-white rounded-md hover:bg-blue-600 my-3 w-1/6  mx-auto"
                >
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
