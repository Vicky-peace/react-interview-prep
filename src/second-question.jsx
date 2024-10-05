/*
In cases where you're working with a value that updates frequently, such as a text input,
you may want to optimize performance by reducing the number of updates.

Create a custom hook `useDebounce()` that allows you to debounce such values.
This will prevent the value from updating too often.

Here's how you can implement it:

function App() {
  const [value, setValue] = useState(...); // Assume this value updates often

  const debouncedValue = useDebounce(value, 1000); // Value is debounced with a delay of 1000ms

  // Use the debouncedValue in place of the original value
}

This setup ensures that the debouncedValue only updates after 1000 milliseconds have passed
since the last time the value was updated.
*/
import React, { useState, useEffect } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);
  return debounce;
};
export const SecondQuestion = () => {
  const [text, setText] = useState("");

  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <h2>Debounce Hook Testers</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{
          marginRight: "10px",
          padding: "1rem",
          borderRadius: "1rem",
          fontSize: "1rem",
        }}
      />
      <p style={{ fontSize: "1rem", fontFamily: "sans-serif" }}>
        Debounced Value:{debouncedText}
      </p>
    </div>
  );
};

/*
The useDebounce hook in React is used to delay a function's execution or state updates, especially when dealing with high-frequency events like user input, API requests, or window resizing. It allows you to control how often a function is called or how often a value is updated, helping to prevent performance issues caused by too many rapid updates. 
*/

/* 
Key Use Cases for useDebounce:

--Handling User Input Efficiently: When a user types in a search box, you might want to update the search results only after they've stopped typing for a certain amount of time. Without debouncing, every keystroke could trigger an update, leading to unnecessary re-renders or API calls.

--API Requests: Debouncing can help reduce the number of API calls. Instead of making an API request for every keypress, you can wait for a pause in typing before sending the request.

--Performance Optimization: Debouncing prevents functions from being called too frequently, helping to avoid performance bottlenecks.

*/