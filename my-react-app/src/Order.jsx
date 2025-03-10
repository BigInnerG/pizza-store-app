import { useState } from "react";

function Order(){
    
    const [selectedPizza, setSelectedPizza] = useState("extra-pepperoni");

    const handleChange = (value) => {

            setSelectedPizza(value);
    
    }


    return(

        <>
            <h1>SPECIALTY PIZZAS</h1>

            <br/><br/>

            <ul>

            <li>Extra Pep In Your Step</li>
            <input type="radio" name = "pizza" value = "extra-pepperoni" onChange={(e) => selectedPizza (e.target.value) }/>
            <img src="images/extra pep pizza.jpg"/> 
            <br/><br/><br/><br/>
            <li>King's Veggie Pizza</li>
            <input type="radio" name="pizza" value="veggie" onChange={ handleChange}/>
            <img src="images/veggie pizza.jpg" alt="veggie pizza"/>
            <br/><br/><br/><br/>
            <li>A Taste of Class</li>
            <input type="radio" name="pizza" value="margherita"/>
            <img src="images/margherita pizza.jpg" alt="margherita pizza"/><br/>
            <br/><br/><br/><br/>
            <li>The Crowd Pleaser</li>
            <input type="radio" name="pizza" value="loaded"/>
            <img src="images/loaded.jpg" alt="loaded pizza"/>
            <br/><br/><br/><br/>

           </ul>
        </>
    );

}
export default Order; 