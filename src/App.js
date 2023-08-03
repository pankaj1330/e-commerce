import React,{createContext, useState} from "react";
import CardData from './data/CardData'
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./Component/Cart";
import About from "./pages/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export const ProductContext = createContext();
const App = () => {
    const [items,setItems] = useState(CardData);
    const [products,setProducts] = useState([]);
    const [val,setVal] = useState('default');
    


    return(
        <>
            <ProductContext.Provider value={{products,setProducts,items,setItems}}>
                <BrowserRouter basename="/e-commerce">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Product val={val} setVal={setVal}/>} />
                        <Route path='/about' element={<About />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </BrowserRouter>
                <Cart />
            </ProductContext.Provider>
        </>
    )
}
export default App;