import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap'
function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="http://www.wallpaperup.com/uploads/wallpapers/2015/05/24/697346/a47fd30b160326dfb5508a07c0afd0e1.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://i.pinimg.com/originals/34/18/47/341847be8ab2ccf362a9e64f9e49853f.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1600" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://webneel.com/daily/sites/default/files/images/daily/02-2016/16-nike-shoe-print-ads-design.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;