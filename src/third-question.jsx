/*
Create a PhoneNumberInput component that handles user input for phone numbers. This component should follow these requirements:

Numerical Input Only:
  - Ensure the component accepts only numerical digits.

Automatic Formatting:
  - Implement automatic formatting for the input:
    - Add parentheses around the first three digits as soon as the fourth digit is entered (e.g., "(123)").
    - Insert a dash after the sixth digit. So, if a user continues entering digits to form a phone number, it should look like this: "(123) 456-7890".

Unstyled Input:
  - Use a standard HTML text input without any additional styling.

The component should facilitate a user-friendly way to enter phone numbers, while maintaining the expected format.
*/

import React, { useState, useRef, useEffect } from 'react';

function PhoneNumberInput({ maxLength = 10 }) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);
    const caretPositionRef = useRef(0); // Fixing the typo here

    const formatPhoneNumber = (numbers) => {
        const formattedValue = [];

        for (let i = 0; i < numbers.length; i++) {
            if (i === 0) {
                formattedValue.push('('); // Start with '(' after the first digit
            }

            formattedValue.push(numbers[i]);

            if (i === 2) {
                formattedValue.push(') '); // Closing ')' after the first three digits
            }

            if (i === 5) {
                formattedValue.push('-'); // Insert dash after the sixth digit
            }
        }

        return formattedValue.join('');
    };

    const handleInputChange = (e) => {
        const target = e.target;
        const currentValue = target.value;
        const numbers = currentValue.replace(/[^0-9]/g, ""); // Extract only numbers
        const selectionStart = target.selectionStart;

        if (numbers.length > maxLength) return; // Prevent entering more than maxLength digits

        const formattedValue = formatPhoneNumber(numbers);

        // Track the caret position
        const diff = formattedValue.length - currentValue.length;
        if (selectionStart) {
            caretPositionRef.current = selectionStart + diff;
        }

        setInput(formattedValue); // Update input state with the formatted value
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.setSelectionRange(
                caretPositionRef.current,
                caretPositionRef.current
            );
        }
    }, [input]);

    return (
        <input
            value={input}
            onChange={handleInputChange}
            ref={inputRef}
            data-testid="phone-number-input"
        />
    );
}

export const ThirdQuestion = () => {
    return (
        <div>
            <PhoneNumberInput maxLength={10} />
        </div>
    );
};
