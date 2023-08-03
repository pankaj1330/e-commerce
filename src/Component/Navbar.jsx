import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { ProductContext } from "../App";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const {products} = useContext(ProductContext);
    function showCart(){
        const cart = document.querySelector('.cart');
        cart.classList.add('show-cart');
        return;
    }
    
    return(
        <header>
            <nav className="navbar">
                <div className="brand">
                    <h1>It</h1>
                </div>
                <ul className="navlist">
                    <li className="navlink">
                        <NavLink to='/' className='link' style={{textDecoration:'none'}} activeclassname='active'>Home</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink to='/about' className='link' style={{textDecoration:'none'}} activeclassname='active'>About</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink to='/products' className='link' style={{textDecoration:'none'}} activeclassname='active'>Products</NavLink>
                    </li>
                    <li className="navlink cart-icon" onClick={showCart}>
                        <ShoppingCartOutlinedIcon fontSize="medium"/>
                        <span>{products.length}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;