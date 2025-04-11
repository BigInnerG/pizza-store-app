import React from 'react'
import Toppings from './components/Toppings' 
import Cheese from './components/cheese'
import Sauces from './components/sauces'
import Crust from './components/crust'
import Sizes from './components/sizes'

function Menu() {
  return (
    <div className="menu-container">
      <h1>START YOUR ORDER HERE</h1>

      <br /><br />

      <div>

      <Sizes/>

      </div>

      <br/><br/>

      <div>

      <Crust />

      </div>
        

      <br/><br/>

      <div>

      <Sauces />

      </div>

      <br /><br />
      
      <div>

      <Cheese />

      </div>
      
      <br /><br />

      <div>

      <Toppings />

      </div>
      
      <br /><br />

      <p>Special Directions</p>
      <textarea
        id="textarea"
        name="textarea"
        rows="8"
        placeholder="Enter special instructions here"
      ></textarea>
    </div>
  )
}

export default Menu