//components/Sizes.jsx
import React from 'react';

function Sizes() {
  const sizeOptions = [
    "Small",
    "Medium",
    "Large"
  ];

  return (
    <fieldset>
        <legend>Choose Your Size:</legend>
      {sizeOptions.map((option, index) => (
        <div key={index}>
          <input type="radio" name="size" value={option} id={`size-${index}`} />
          <label htmlFor={`size-${index}`}>{option}</label><br />
        </div>
      ))}
    </fieldset>
  );

}
export default Sizes;