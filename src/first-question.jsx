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

  // Event handler for input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the fruits based on search term
  const fruitsDataFiltered = fruitsData.filter((fruit) =>
    fruit.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  //function to highlight matching characters
  const highlightMatch = (fruit) => {
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = fruit.split(regex);
    return(
        <>
        {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
            <strong key={index}>{part}</strong>
        ): (
            part
        )
        )}
        </>
    )

  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleInputChange}
      />
      <ul>
      {fruitsDataFiltered.length > 0 ?(
        fruitsDataFiltered.map((fruit, index)=> <li key={index}>{highlightMatch(fruit)}</li>)
      ):(
        <li>No matches found</li>
      )}
      </ul>
     
    </div>
  );
};


/*Additional interviewer quizes
1.To display something when nothing i showed e.g an error message
2.Make each character or word you type in search bar be bold
*/