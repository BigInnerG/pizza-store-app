import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Menu from './Menu'
import Order from './Order'
import Extras from "./Extra";
import SignIn from "./SignIn";
//import NotFound from './NotFound'
import './App.css'

function App() {
  
     return(

      <>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/menu" element= {<Menu/>}/>
        <Route path="/order" element= {<Order/>}/>
        <Route path="/extra" element= {<Extras/>}/>
        <Route path="/signin" element= {<SignIn/>}/>
      </Routes>
      </>

     ); 

    }

export default App