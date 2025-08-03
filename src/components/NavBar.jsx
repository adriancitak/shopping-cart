import { NavLink } from "react-router-dom";

const NavBar = ({cartItems}) => {

    const numOfItems = cartItems.reduce((acc, items) => acc + items.quantity, 0);

    return (
        <nav>
            <ul style={{display: 'flex', gap: '1em', fontSize: '2em', backgroundColor:'lightblue'}}> 
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li style={{marginLeft:'auto', paddingRight: '1em'}}>
                    <NavLink to='/cart'>Shopping Cart ({numOfItems})</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;