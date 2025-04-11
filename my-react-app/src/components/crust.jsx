import React from 'react';

function Crust() {
  const crustOptions = [
    "Hand Tossed",
    "Stuffed Crust",
    "Thin",
    "Gluten Free Crust",
    "Pan"
  ];

  return (
    <fieldset>
        <legend>Choose Your Crust:</legend>
      {crustOptions.map((option, index) => (
        <div key={index}>
          <input type="radio" name="crust" value={option} id={`crust-${index}`} />
          <label htmlFor={`crust-${index}`}>{option}</label><br />
        </div>
      ))}
    </fieldset>
  );
}

export default Crust;