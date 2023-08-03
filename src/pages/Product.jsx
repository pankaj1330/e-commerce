import Cards from "../Component/Cards"
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useContext } from "react";
import { ProductContext } from "../App";
import {useNavigate} from 'react-router-dom'

const Product = (props) => {

    const {setItems} = useContext(ProductContext);
    const navigate = useNavigate();

    function filterProducts(e){
        if(e.target.value === 'incOrder'){
            setItems(prev => {
                return(
                    prev.sort((a,b)=>{
                        return a.price - b.price;
                    })
                )
            })
        }
        else if(e.target.value === 'decOrder'){
            setItems(prev => {
                return(
                    prev.sort((a,b)=>{
                        return b.price - a.price;
                    })
                )
            })
        }
        else{
            setItems(prev => {
                return(
                    prev.sort((a,b)=>{
                        return a.id - b.id;
                    })
                )
            });
        }
        props.setVal(prev => e.target.value);
        navigate('/products');
    }

    console.log('product render');
    return(
        <>
            <Navbar />
            <h1 className="card-section-heading">Products</h1>
            <select name="filter" id="filter" onChange={filterProducts} value={props.val}>
                <option value='default'>Filter</option>
                <option value="decOrder">price High to Low</option>
                <option value="incOrder">price Low to High</option>
            </select>
            <Cards />
            <Footer />
        </>
    )
}

export default Product;