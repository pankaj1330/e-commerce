import Card from "./Card"
import { useContext } from "react";
import { ProductContext } from "../App";
import { Link } from "react-router-dom";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const ProductSection = () => {
    const {items} = useContext(ProductContext);
    const filter4 = items.filter((cardItem) => {
        return cardItem.id<=4;
    })
    function scrolltotop(){
        window.scrollTo({
            top:0,
            behavior: 'instant'
        });
    }

    return(
        <>      
        <h1 className="card-section-heading">Products</h1>
        <section className="cards">
        {
            filter4.map(item => {
                return(
                    <Card 
                        key = {item.id}
                        id = {item.id}
                        imgLink = {item.imgLink}
                        price = {item.price}
                        addedToCart = {item.addedToCart}
                    />
                )
            })
        }
        </section>
        <div className="show-all">
            <button className="allProducts" onClick={scrolltotop}><Link to='/products' style={{color:'black',textDecoration:'none'}}>All Products <ChevronRightOutlinedIcon /></Link></button>
        </div>
        </>
    )
}

export default ProductSection;