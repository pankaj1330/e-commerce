import CartItem from "./CartItem";
import { useContext } from "react";
import { ProductContext } from "../App";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Cart = () => {
    const {products} = useContext(ProductContext);
    function hideCart(){
        const cart = document.querySelector('.cart');
        cart.classList.remove('show-cart');
        return;
    }
    return(
        <section className="cart">
            <div className="heading">
                <h1>Cart items</h1>
                <button className="hide-cart" onClick={hideCart}> <CloseOutlinedIcon /> </button>
            </div>
            <div className="cart-items">
                {
                    products.map((item) => {
                        return(
                            <CartItem 
                                key = {item.id}
                                id = {item.id}
                                imgLink = {item.imgLink}
                                price = {item.price}
                                quantity = {item.quantity}
                            />
                        )
                    })
                }
            </div>
            <div className="total">
                <h1>Total : <span style={{fontSize:'26px',fontWeight:400}}>$</span>
                {
                    products.reduce((result,item)=>{
                        return item.price*item.quantity + result;
                    },0)
                }</h1>
            </div>
        </section>
    )
}

export default Cart;