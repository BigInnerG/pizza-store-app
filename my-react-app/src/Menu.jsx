import React, {  useState } from 'react'
import { toppings } from './components/toppings';
//import { cheese } from './components/cheese'
//import { sauces } from './components/sauces'

function Menu(){

    return(

        <>
            <h1>START YOUR ORDER HERE</h1>

            <br></br><br></br>

            <fieldset>

            <legend>Choose Your Size:</legend>

                <input type ="checkbox" name = "size" value = "pizza"/> Small<br/>
                <input type ="checkbox" name = "size" value = "pizza"/> Medium<br/> 
                <input type ="checkbox" name = "size" value = "pizza"/> Large<br/> 


            </fieldset>


            <br/><br/>


            <fieldset>

                <legend>Choose Your Crust:</legend>

                <input type="checkbox" name="crust" value="handtossed"/> Hand Tossed<br/> 
                <input type="checkbox" name="crust" value="stuffed"/> Stuffed Crust<br/> 
                <input type="checkbox" name="crust" value="thin"/> Thin<br/> 
                <input type="checkbox" name="crust" value="glutenfree"/> Gluten Free Crust<br/>
                <input type="checkbox" name="crust" value="pan"/> Pan<br/> 

            </fieldset>

            <br/><br/>

            <fieldset>

                <legend>Choose Your Sauce:</legend>

                <input type ="checkbox" name = "sauce" value = "pizza"/> King's Classic Tomato Sauce<br/> 
                <input type ="checkbox" name = "sauce" value = "pizza"/> Garlic Parmesean<br/> 
                <input type ="checkbox" name = "sauce" value = "pizza"/> Alfredo Sauce<br/> 
                <input type ="checkbox" name = "sauce" value = "pizza"/> King's Zesty Marinara Sauce<br/> 

            </fieldset>

            <br/><br/>

            <fieldset>

                <legend>Cheese:</legend>

            <input type ="checkbox" name = "cheese" value = "pizza"/> 6 Blended Cheeses<br/>        
            <input type ="checkbox" name = "cheese" value = "pizza"/> Vegan Cheese<br/> 
            <input type ="checkbox" name = "cheese" value = "pizza"/> No Cheese<br/> 

            </fieldset>
            
            <br/><br/>

            <fieldset> 

            <legend>Choose Up To 10 Toppings</legend>           

            <ul className="toppings-list">
                
                {toppings.map(({ name }, index) => {


                    return (

                        <li key={index}>
                            <div className="toppings-list-item">
                                
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}/>

                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
              
                        </li>
          );
        })}

                        
            </ul>

            </fieldset>

            <br/><br/>

            <p>Special Directions</p>
            <textarea name ="textarea" rows="8">Enter special intstructions here</textarea>

        </>

    );

}
export default Menu;