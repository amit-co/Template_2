import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../assets/IMAGES/cafe1.jpeg";
import img2 from "../assets/IMAGES/cafe2.jpeg";
import img3 from "../assets/IMAGES/cafe3.jpeg";
import img4 from "../assets/IMAGES/cafe4.jpeg";
import img5 from "../assets/IMAGES/cafe.jpg";
import img6 from "/img1.jpg";
import img from "/Textures/4524.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../utils//custom-slick-dots.css";

export function RestaurantDetails() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const images = [img1, img2, img3, img4, img5];

    return (
        <div>
            <div className="lg:w-full lg:h-full mx-auto items-center lg:flex mb-10">
                <div className="w-11/12 ml-10 lg:w-[24vw] mx-auto">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index}>
                                <img
                                    src={img}
                                    className="lg:rounded-full w-full h-[24vw] object-cover"
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="px-4 mt-6 lg:mt-0 lg:ml-8">
                    <img src={img6} className="mx-auto mb-10" alt="Restaurant" />
                    <h1 className="hidden sm:block text-xl text-center font-semibold text-black mx-20 mb-10">
                        Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity. From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients. Whether you&apos;re craving traditional favorites or bold international flavors, our restaurants promise a gastronomic adventure that delights the senses and leaves a lasting impression.
                    </h1>
                    <div className="text-center text-xl sm:mx-[27%] md:mx-[30%] lg:mx-[32%] xl:mx-[32%] 2xl:mx-96 space-y-20 mt-5">
                        <p className="border py-4 rounded-lg text-white transition-all duration-300"
                            style={{ backgroundImage: `url(${img})` }}>
                            <Link to="/about">
                                READ MORE
                            </Link>
                        </p>
                        <p className="border py-4 rounded-lg text-white transition-all duration-300"
                            style={{ backgroundImage: `url(${img})` }}>
                            <Link to="/gallery">
                                VIEW GALLERY
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
