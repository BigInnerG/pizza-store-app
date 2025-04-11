import React from "react";

function Extras() {
  const desserts = [
    {
      name: "Chocolate Bums",
      value: "chocolate",
      img: "images/chocolate bum dessert.jpg",
      alt: "chocolate filled with cream dessert",
    },
    {
      name: "Cinnamon Rolls",
      value: "cinnamon",
      img: "images/cinnamon rolls.jpg",
      alt: "cinnamon rolls",
    },
  ];

  const sodas = [
    "Pepsi",
    "Mountain Dew",
    "Sunkist",
    "Diet Pepsi",
    "7up",
    "Root Beer",
  ];

  const sides = [
    {
      name: "Pasta Salad",
      value: "pasta",
      img: "images/pasta salad.jpg",
      alt: "pasta salad",
    },
    {
      name: "Classic Side Salad",
      value: "salad",
      img: "images/salad ingredients.jpg",
      alt: "salad ingredients",
    },
  ];

  return (
    <div className="extras-container">
      <h1 className="page-title">Extras</h1>

      <br /><br />

      <fieldset>
        <legend>Desserts</legend>
        {desserts.map(({ name, value, img, alt }) => (
          <div className="extras-item" key={value}>
            <img className="extras-img" src={img} alt={alt} />
            <label>
                <br /><br />
              <input type="radio" name="dessert" value={value} />
              {name}
            </label>
            <br /><br />
          </div>
        ))}
      </fieldset>

      <br /><br />

      <fieldset>
        <legend>Drinks</legend>
        <img
          className="extras-img"
          src="images/drinks.jpg"
          alt="assorted soda drinks"
        />
        <div className="soda-options">
          {sodas.map((soda, index) => (
            <label key={index}>
              <input type="checkbox" name="soda" value={soda.toLowerCase()} />
              {soda}
              <br />
            </label>
          ))}
        </div>
      </fieldset>

      <br /><br />

      <fieldset>
        <legend>Side Salads</legend>
        {sides.map(({ name, value, img, alt }) => (
          <div className="extras-item" key={value}>
            <img className="extras-img" src={img} alt={alt} />
            <label>
            <br /><br />
              <input type="radio" name={value} value={value} />
              {name}
            </label>
            <br /><br />
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default Extras;
