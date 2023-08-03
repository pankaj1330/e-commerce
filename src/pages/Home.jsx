import Navbar from "../Component/Navbar";
import Slider from "../Component/Slider";
import ProductSection from "../Component/ProductSection";
import Footer from "../Component/Footer";
import Feature from "../Component/Feature";

const Home = () => {
    return(
        <>
            <Navbar />
            <Slider />
            <Feature />
            <ProductSection />
            <Footer />
        </>
    )
}
export default Home;