import { useContext } from "react";
import { ProductContext } from "../App";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const CartItem = (props) => {
    const {setProducts,setItems} = useContext(ProductContext);

    function inc(id){
        setProducts(prev => {
            return(
                prev.map(item => {
                    if(item.id === id){
                        item.quantity = item.quantity+1;
                        return item;
                    }
                    return item;
                })
            )
        })
    }
    function dec(id){
        setProducts(prev => {
            return(
                prev.map(item => {
                    if(item.id === id && item.quantity>=1){
                        item.quantity = item.quantity-1;
                        return item;
                    }
                    return item;
                })
            )
        })
    }

    function removeItem(e){
        setProducts(prev => {
            return(
                prev.filter(item => {
                    return item.id !== props.id;
                })
            )
        })
        setItems(prev => {
            return(
                prev.map(item => {
                    if(item.id === props.id){
                        return {
                            ...item,
                            addedToCart : false
                        }
                    }
                    return item;
                })
            )  
        })
    }


    return(
        <div className="item">
            <div className="img">
                <img src={props.imgLink} alt="not found" />
            </div>
            <div className="price-and-remove-btn">
                <p className="price">$ {props.price * props.quantity}</p>
                <button className="remove" onClick={removeItem}>
                    Remove
                </button>
            </div>
            <div className="inc-dec-btns">
                <button className="dec" onClick={() => dec(props.id)}><ChevronLeftOutlinedIcon /></button>
                <p className="quantity">{props.quantity}</p>
                <button className="inc" onClick={()=>inc(props.id)}><ChevronRightOutlinedIcon /></button>
            </div>
        </div>
    )
}
export default CartItem;