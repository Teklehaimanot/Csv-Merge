import Link from "next/link";
import React, { useState } from "react";

const UserGuide = () => {
  const [showGettingStarted, setShowGettingStarted] = useState(false);
  const [showStepByStep, setShowStepByStep] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);

  return (
    <div className="mx-auto w-full bg-gray-100 shadow-sm  py-5">
      <div className="w-2/3 mx-auto flex flex-col space-y-5 my-5">
        <h2 className="text-2xl text-blue-700">User Guide</h2>
        <p className="text-gray-600">
          Welcome to Smart CSV Filter & Merger, a powerful tool designed to help
          you manage your CSV files with ease. This guide will walk you through
          the steps to upload a CSV file, filter data based on string
          similarity, replace filtered results, and merge the changes back into
          the original CSV data.
        </p>

        <button
          className="collapsible bg-gray-200 hover:bg-gray-300 p-2 w-full text-left mb-2"
          onClick={() => setShowGettingStarted(!showGettingStarted)}
        >
          Getting Started
        </button>
        {showGettingStarted && (
          <div className="content p-2 bg-gray-100 mb-2">
            <ol>
              <li>
                <strong>1. Upload a CSV File:</strong>
                <ul>
                  <li>Click on the &quot;Upload CSV&quot; button.</li>
                  <li>
                    Select the CSV file from your local storage and upload it.
                  </li>
                  <li>
                    The application will display the columns available in your
                    CSV file.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        )}

        <button
          className="collapsible bg-gray-200 hover:bg-gray-300 p-2 w-full text-left mb-2"
          onClick={() => setShowStepByStep(!showStepByStep)}
        >
          Step-by-Step Instructions
        </button>
        {showStepByStep && (
          <div className="content p-2 bg-gray-100 mb-2">
            <ol>
              <li>
                <strong>2. Select a Column:</strong>
                <ul>
                  <li>
                    From the displayed list of columns, choose the column you
                    want to work with.
                  </li>
                  <li>
                    This is the column where the string similarity filtering
                    will be applied.
                  </li>
                </ul>
              </li>
              <li>
                <strong>3. Input a String:</strong>
                <ul>
                  <li>
                    In the &quot;Input String&quot; field, type the string you
                    want to search for in the selected column.
                  </li>
                  <li>
                    The application will compare this string with the entries in
                    the selected column.
                  </li>
                </ul>
              </li>
              <li>
                <strong>4. Set Similarity Threshold:</strong>
                <ul>
                  <li>
                    Adjust the similarity threshold slider to set how closely
                    the entries should match your input string.
                  </li>
                  <li>
                    A higher threshold means stricter matching, while a lower
                    threshold allows for more lenient matching.
                  </li>
                </ul>
              </li>
              <li>
                <strong>5. Find Matches:</strong>
                <ul>
                  <li>Click the &quot;Find&quot; button.</li>
                  <li>
                    The application will filter the results based on the string
                    similarity within the given threshold.
                  </li>
                  <li>The filtered results will be displayed on the screen.</li>
                </ul>
              </li>
              <li>
                <strong>6. Replace Filtered Results:</strong>
                <ul>
                  <li>
                    In the &quot;Replace With&quot; field, type the string you
                    want to use to replace the filtered results.
                  </li>
                  <li>Click the &quot;Replace&quot; button.</li>
                  <li>
                    The application will replace the filtered results with your
                    preferred string.
                  </li>
                </ul>
              </li>
              <li>
                <strong>7. Merge Changes:</strong>
                <ul>
                  <li>
                    After replacing the results, click the &quot;Mergev&quot;
                    button.
                  </li>
                  <li>
                    The application will merge the changes back into the
                    original CSV data.
                  </li>
                </ul>
              </li>
              <li>
                <strong>8. Download Merged CSV:</strong>
                <ul>
                  <li>
                    Click the &quot;Download Merged CSV&quot; button to download
                    the updated CSV file with your changes.
                  </li>
                  <li>Save the file to your local storage.</li>
                </ul>
              </li>
            </ol>
          </div>
        )}

        <button
          className="collapsible bg-gray-200 hover:bg-gray-300 p-2 w-full text-left mb-2"
          onClick={() => setShowTips(!showTips)}
        >
          Tips and Tricks
        </button>
        {showTips && (
          <div className="content p-2 bg-gray-100 mb-2">
            <ul>
              <li>
                <strong>Check Column Headers:</strong> Ensure that your CSV file
                has proper column headers for better accuracy in column
                selection.
              </li>
              <li>
                <strong>Adjust Threshold Carefully:</strong> The similarity
                threshold is crucial for accurate filtering. Adjust it based on
                your needs to get the best results.
              </li>
              <li>
                <strong>Review Changes:</strong> Before merging and downloading,
                review the filtered and replaced results to ensure they meet
                your expectations.
              </li>
            </ul>
          </div>
        )}

        <button
          className="collapsible bg-gray-200 hover:bg-gray-300 p-2 w-full text-left mb-2"
          onClick={() => setShowTroubleshooting(!showTroubleshooting)}
        >
          Troubleshooting
        </button>
        {showTroubleshooting && (
          <div className="content p-2 bg-gray-100 mb-2">
            <ul>
              <li>
                <strong>File Upload Issues:</strong> If the CSV file fails to
                upload, ensure it is properly formatted and not corrupted.
              </li>
              <li>
                <strong>No Filtered Results:</strong> If no results are
                filtered, try lowering the similarity threshold or check if the
                input string is correct.
              </li>
              <li>
                <strong>Errors in Replacement:</strong> Ensure that the "Replace
                With" field is not empty when replacing the filtered results.
              </li>
            </ul>
          </div>
        )}

        <p>
          We hope this guide helps you navigate and utilize the Smart CSV Filter
          & Merger application effectively. For further assistance, refer to our{" "}
          or contact our support team at{" "}
          <Link
            href="mailto:kelaltech24@gmail.com"
            className="text-blue-500 underline"
          >
            kelaltech24@gmail.com
          </Link>
          .
        </p>

        <p>Happy CSV managing!</p>
      </div>
    </div>
  );
};

export default UserGuide;
