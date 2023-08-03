import Card from "./Card"
import { useContext } from "react";
import { ProductContext } from "../App";

const Cards = () => {
    const {items} = useContext(ProductContext);
    console.log('card render');
    return(
        <>
        <section className="cards">
            {
                items.map((cardItem) => {
                    return(
                        <Card 
                            key = {cardItem.id}
                            id = {cardItem.id}
                            imgLink = {cardItem.imgLink}
                            price = {cardItem.price}
                            addedToCart = {cardItem.addedToCart}
                        />
                    )
                })
            }
        </section>
        </>
    )
}

export default Cards