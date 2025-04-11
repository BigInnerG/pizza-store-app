import { useState } from "react";

function Order() {
  const [selectedPizza, setSelectedPizza] = useState("extra-pepperoni");

  const handleChange = (e) => {
    setSelectedPizza(e.target.value);
  };

  return (
    <div className="order-page">
      <h1 className="page-title">Specialty Pizzas</h1>

      <div className="pizza-list">
        {[
          {
            label: "Extra Pep In Your Step",
            value: "extra-pepperoni",
            img: "images/extra pep pizza.jpg",
            desc: "Extra pepperoni, extra cheese, and extra flavor!",
          },
          {
            label: "King's Veggie Pizza",
            value: "veggie",
            img: "images/veggie pizza.jpg",
            desc: "A delightful mix of fresh vegetables and cheese.",
          },
          {
            label: "A Taste of Class",
            value: "margherita",
            img: "images/margherita pizza.jpg",
            desc: "Classic margherita with fresh basil and mozzarella.",
          },
          {
            label: "The Crowd Pleaser",
            value: "loaded",
            img: "images/loaded.jpg",
            desc: "Loaded with of our toppings.",
          },
        ].map(({ label, value, img, desc }) => (
          <div className="pizza-card" key={value}>
            <label>
              <input
                type="radio"
                name="pizza"
                value={value}
                checked={selectedPizza === value}
                onChange={handleChange}
              />
              <h3>{label}</h3>
              <img className="pizza-img" src={img} alt={label} />
              <p className="pizza-desc">{desc}</p>
            </label>
          </div>
        ))}
      </div>

      <button type="submit" className="submit-btn">
        Place Order
      </button>
    </div>
  );
}

export default Order;
