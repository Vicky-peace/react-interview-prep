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

import React, {useState, useRef, useEffect} from 'react';
