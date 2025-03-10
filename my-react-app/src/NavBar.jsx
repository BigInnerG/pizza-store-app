import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <>
        <nav>

            <Link to='/'>Home</Link> | <Link to='/menu'>BYOP!</Link> | <Link to='/order'>King's Specialties</Link> | <Link to='/extra'>Extras</Link> | <Link to='/signin'>Sign In</Link>


        </nav>
        </>
    );
}
export default NavBar; 