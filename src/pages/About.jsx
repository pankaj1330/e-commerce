import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function About(){
    return(
        <>
            <Navbar />
            <h1 className="card-section-heading">About Us</h1>
            <section className="about-page">
                <h1>Welcome to It!</h1>
                <p>At It, we believe that the perfect pair of shoes can elevate any outfit, boost your confidence, and make you feel unstoppable. We are passionate about shoes and committed to providing our customers with an exceptional online shopping experience. Our goal is to be your go-to destination for stylish, comfortable, and high-quality footwear.</p>
                <h1>Discover Your Style :</h1>
                <p>Step into a world of fashion and comfort with our carefully curated selection of shoes for men, women, and children. Whether you're looking for trendy sneakers, elegant heels, versatile boots, or casual sandals, we have something to suit every style, occasion, and budget. With a wide range of brands, designs, and sizes available, you're sure to find the perfect fit for your unique taste.</p>
            </section>
            <Footer />
        </>
    )
}
export default About;