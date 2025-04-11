import React from "react";

function Toppings() {
  const toppingopt = [
    "Ham",
    "Beef Sausage",
    "Pepperoni",
    "Pork Sausage",
    "Salami",
    "Chicken",
    "Bacon",
    "Steak",
    "Mushrooms",
    "Onions",
    "Banana Peppers",
    "Bell Peppers",
    "Olives",
    "Extra Cheese",
    "Diced Tomatoes",
    "Spinach",
    "Jalapenos",
    "Pineapple"
  ];

  return (
    <fieldset>
      <legend>Choose Up To 10 Toppings</legend>
      <div className="toppings-list">
        {toppingopt.map((name, index) => (
          <div className="topping-item" key={index}>
            <input
              type="checkbox"
              id={`topping-${index}`}
              name="toppings"
              value={name}
            />
            <label htmlFor={`topping-${index}`}>{name}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default Toppings;