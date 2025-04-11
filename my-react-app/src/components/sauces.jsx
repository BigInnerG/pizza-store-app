import React from 'react';

function Sauces() {
  const sauceOptions = [
    "King's Classic Tomato Sauce",
    "Garlic Parmesan",
    "Alfredo Sauce",
    "King's Zesty Marinara Sauce"
  ];

  return (
    <fieldset>
        <legend>Choose Your Sauce:</legend>
      {sauceOptions.map((option, index) => (
        <div key={index}>
          <input type="radio" name="sauce" value={option} id={`sauce-${index}`} />
          <label htmlFor={`sauce-${index}`}>{option}</label><br />
        </div>
      ))}
    </fieldset>
  );
}

export default Sauces;
