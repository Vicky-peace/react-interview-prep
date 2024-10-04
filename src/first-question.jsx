/*
Initial Setup:
    Let an array of strings called fruits, for example: ["apple", "banana", "cherry", "date", "elderberry"].
    Display this list in the UI.
Search Input:
    Use the provided input fields.
    As the user types into the input, filter the displayed list to include only those items that contain the search term.
Real-Time Filtering:
    The list should update as soon as the user types into the search box, without needing to submit.
No Matches:
    Display a friendly message if no items match the search term.

*/

import React, { useState } from "react";

export const FirstQuestion = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  const [fruitsData, setFruitsData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const fruitsDataFiltered = fruitsData.filter((fruit) =>
    fruit.includes(searchTerm)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleInputChange}
      />

      {fruitsDataFiltered.map((fruit) => {
        return <p>{fruit}</p>;
      })}
    </div>
  );
};
