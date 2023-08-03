import { Link } from "react-router-dom";

function Footer(){
    function scrolltotop(){
        window.scrollTo({
            top:0,
            behavior: 'instant'
        });
    }
    return(
        <footer>
            <h1 className="brand">It</h1>
            <ul className="navigate">
                <li className="navlink">
                    <Link to='/' style={{textDecoration:'none',color:'white'}} onClick={scrolltotop}>Home</Link>
                </li>
                <li className="navlink">
                    <Link to='/about' style={{textDecoration:'none',color:'white'}} onClick={scrolltotop}>About</Link>
                </li>
                <li className="navlink">
                    <Link to='/products' style={{textDecoration:'none',color:'white'}} onClick={scrolltotop}>Products</Link>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;