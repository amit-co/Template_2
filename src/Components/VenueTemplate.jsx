import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { Link, useNavigate} from "react-router-dom";
import { GrGallery } from "react-icons/gr";
const pdfDownloadLink = "/Pdf/OXBO-Breakfast Menus.pdf";
import PropTypes from 'prop-types';
import img1 from "/New/bgn.png";
import img2 from "/New/Group 36.png";
import img3 from "/New/Group 37.png";
import img4 from "/New/Group 43.png";
import img5 from "/New/Group 71.png";
import bar from "/New/Group 33.png";
import cafe from "/New/Group 109.png";
import pd from "/New/Group 110.png";
import ird from "/New/Group 111.png";


export default function VenueTemplate({ venueInfo }) {
  const navigate = useNavigate()
  const [menuDailog,setMenuDialog] = useState(false)
  const [galleryDailog,setGalleryDialog] = useState(false)
  function clickHandler(){
    window.location.href = "https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine"
  }
  return (
        <div>
     
                               
              <div className="bg-repeat flex flex-col fixed w-full h-full  items-center relative mt-14 mx-auto bg-cover mb-10" style={{ backgroundImage: `url(${img1})` }}>
                          <h1 className="sm:text-5xl text-4xl tracking-widest text-customBrown3 font-bold mb-4 text-center">
                                            {venueInfo.venueType}
                          </h1>

                         <div className="flex flex-col w-56 lg:w-[100vw] justify-center mx-auto mb-8">
                  <h1 className=" text-center text-black-600 text-sm sm:text-base lg:text-lg tracking-widest font-medium mb-4  whitespace-break-spaces">
                                      The Coming Together Of Friends And Families, Colleagues Or Strangers Is The Heart And Soul Of OXBO.
                                      </h1>
                  <p className=" text-center text-black-600 text-sm sm:text-base lg:text-lg tracking-widest font-medium whitespace-break-spaces">
                                      Our Spaces Are Designed To Be Sociable. They Are Multi-Purpose All-Day Dining And Drinking Environments That Can Be Used In Different Ways,
                                      As The Occasion Dictates Or As The Mood Changes. From Breakfast To Late. Our Spaces Are Large Enough To Accommodate Gatherings And Groups,
                                      With Clever Partitions Or Siding Panels That Can Be Used To Create Smaller Areas With A Cosier Feel. Seating Arrangements Reflect And
                                      Respect Single Diners And Drinkers Too.
                                      </p>
                              
                         </div>     
                              <div className="flex flex-col-2 w-20 h-20 lg:w-full lg:h-full">
                  <div className=" bg-no-repeat h-[80vh] sm:ml-20 sm:mt-4 lg:w-[125vh]  " style={{ backgroundImage: `url(${img2})` }}><img src={bar} className="mt-12 ml-96" /></div>

                  <div className="bg-no-repeat mr-28 sm:w-1/2 lg:w-1/3 xl:w-2/6 mt-28 relative" style={{ backgroundImage: `url(${img3})` }}><img src={cafe} className="absolute  mt-40 right-96" /></div>

                              </div>
                              <div className="flex flex-col-2 w-full h-full gap-72 space-y-24 mr-2 ml-16">
                  <div className="bg-no-repeat h-[80vh]  rounded-md sm:ml-12 sm:mt-4 lg:w-[125vh]   " style={{ backgroundImage: `url(${img4})` }}><img src={pd} className="mt-48 ml-80 " /></div>
                  <div className="bg-no-repeat h-[400px] mr-20 rounded-md sm:mr-4 sm:mt-32 lg:w-[125vh] " style={{ backgroundImage: `url(${img5})` }}><img src={ird} className="absolute mt-48 right-96" /></div>
                             </div>
             
              </div>
      
        </div>
  );
}

VenueTemplate.propTypes = {
    venueInfo: PropTypes.shape({
        image: PropTypes.string.isRequired,
        button: PropTypes.object.isRequired,
        link: PropTypes.string.isRequired,
        venueType: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
