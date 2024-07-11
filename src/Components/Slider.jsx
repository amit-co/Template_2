import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/IMAGES/img1.jpg";
import img2 from "../assets/IMAGES/img2.jpg";
import img3 from "../assets/IMAGES/img3.jpg";
import img4 from "../assets/IMAGES/img4.jpg";
export default function Slider() {
  const responsive = {
    desktop_4k : {
      breakpoint: { max:2560 , min:1440 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop_l :{
      breakpoint: { max: 1440, min:1024 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min:768 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mt-[24vh] relative ">
        
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["mobile", "tablet", "desktop","desktop_l","desktop_4k"]}
        showDots={false}
        infinite={true}
        transitionDuration={3000}
        autoPlaySpeed={1000}
        autoPlay={true}
      >
              <img className="w-11/12 h-90 mx-auto object-cover" src={img2} alt="NO IMAGE FOUND" />
              <img className="w-11/12 h-90 mx-auto object-cover" src={img3} alt="NO IMAGE FOUND" />
              <img className="w-11/12 h-90 mx-auto object-cover" src={img4} alt="NO IMAGE FOUND" />
              <img className="w-11/12 h-90 mx-auto object-cover" src={img1} alt="NO IMAGE FOUND" />
      </Carousel>

    </div>
  );
}
