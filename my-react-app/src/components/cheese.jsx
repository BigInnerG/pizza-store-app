// components/Cheese.jsx
import React from 'react';

function Cheese() {
  const cheeses = [
    "6 Blended Cheeses",
    "Vegan Cheese",
    "No Cheese"
  ];

  return (
    <fieldset>
      <legend>Choose Your Cheese:</legend>
      {cheeses.map((cheeses, index) => (
        <div key={index}>
          <input 
            type="radio" 
            id={`cheese-${index}`}
            name="cheese" 
            value={cheeses} 
          />
          <label htmlFor={`cheese-${index}`}>{cheeses}</label>
        </div>
      ))}
    </fieldset>
  );
}

export default Cheese;
