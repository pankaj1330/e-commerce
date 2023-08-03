import { useContext } from "react";
import { ProductContext } from "../App";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Card = (props) => {

    const {setProducts,setItems} = useContext(ProductContext);

    function addToCart(e){
        const imgtag = e.target.parentElement.querySelector('img');
        const price = e.target.parentElement.querySelector('.price').textContent.slice(2);
        setProducts(prev => {
            return(
                [
                    ...prev,
                    {
                        id : props.id,
                        quantity : 1,
                        addedToCart : true,
                        imgLink : imgtag.src,
                        price : price
                    }
                ]
            )
        })
        setItems(prev => {
            return(
                prev.map(item => {
                    if(item.id === props.id){
                        return {
                            ...item,
                            addedToCart : true
                        }
                    }
                    return item;
                })
            )  
        })
        return;
    }

    function goToCart(){
        const cart = document.querySelector('.cart');
        cart.classList.add('show-cart');
        return;
    }

    return(
        <div className="card">
            <img src={props.imgLink} alt="not Found" />
            <h1 className="price"><span>$</span> {props.price}</h1>
            {
                (props.addedToCart) ? (<button className="go-to-cart" onClick={goToCart}><ShoppingCartOutlinedIcon fontSize="small"/> Go to cart </button>) :
                                        (<button className="add-to-cart" onClick={addToCart}> Add to cart </button>)        
            }
        </div>
    )
}

export default Card;