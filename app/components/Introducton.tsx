import React from "react";

const Introducton = () => {
  return (
    <div className="mx-auto w-full bg-gray-100 shadow-sm  py-5">
      <div className="w-2/3 mx-auto flex flex-col space-y-5 py-16">
        <h2 className="text-2xl text-blue-700">Why This Tool</h2>
        <p className=" text-blue-950   font-sans">
          Welcome to SmartCSVTool, a powerful and user-friendly application
          designed to help you manage and clean your CSV data with ease. This
          tool allows you to handle common data inconsistencies, such as
          variations in spelling, and provides functionalities to search,
          replace, and merge data seamlessly.
        </p>
        <p className=" text-blue-950   font-sans">
          Let&apos;s say you have a CSV file with a column for city names. Due
          to data entry errors, &quot;San Francisco&quot; is spelled in
          different ways across the rows, such as &quot;San Fransisco,&quot;
          &quot;San Francsico,&quot; and &quot;San Fransico.&quot; This
          inconsistency can create problems when analyzing your data.
          SmartCSVTool can help you identify and correct these variations.
        </p>
      </div>
    </div>
  );
};

export default Introducton;
