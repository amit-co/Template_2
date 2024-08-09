import { useState } from "react";
import { useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';
import img2 from "/New/Group 36.png";
import img3 from "/New/Group 37.png";
import img4 from "/New/Group 43.png";
import img5 from "/New/Group 71.png";
import bar from "/New/Group 33.png";
import cafe from "/New/Group 109.png";
import pd from "/New/Group 110.png";
import ird from "/New/Group 111.png";
import imgB from "/New/bgn.png";


export default function VenueTemplate({ venueInfo }) {
  const navigate = useNavigate()
  return (
        <div>
     
                               
          <div className=" flex flex-col fixed w-full h-full  items-center relative mt-14 mx-auto bg-cover pb-10 pt-28" style={{ backgroundImage: `url(${imgB})` }}>
                          <h1 className="sm:text-5xl text-4xl tracking-widest text-customBrown3 font-bold mb-4 text-center">
                                            {venueInfo.venueType}
                          </h1>

                         <div className="flex flex-col w-full lg:w-[100vw] justify-center mx-auto mb-8">
                                      <h1 className=" text-center text-black-600 text-sm sm:text-base lg:text-lg tracking-widest font-medium mb-4 mx-3 whitespace-break-spaces">
                                                          The Coming Together Of Friends And Families, Colleagues Or Strangers Is The Heart And Soul Of OXBO.
                                      </h1>
                                      <p className=" text-center text-black-600 text-sm sm:text-base mx-6 lg:text-lg tracking-widest font-medium whitespace-break-spaces">
                                                          Our Spaces Are Designed To Be Sociable. They Are Multi-Purpose All-Day Dining And Drinking Environments That Can Be Used In Different Ways,
                                                          As The Occasion Dictates Or As The Mood Changes. From Breakfast To Late. Our Spaces Are Large Enough To Accommodate Gatherings And Groups,
                                                          With Clever Partitions Or Siding Panels That Can Be Used To Create Smaller Areas With A Cosier Feel. Seating Arrangements Reflect And
                                                          Respect Single Diners And Drinkers Too.
                                      </p>                              
                         </div>     
                             <div className="flex sm:flex-row flex-col w-full sm:space-y-96 mr-2 mt-20 xl:mt-10 sm:ml-14 ml-20">
                                <div onClick={() => navigate("/gallery/drinks")} className="bg-no-repeat sm:h-[80vh]  rounded-md sm:ml-12 sm:mt-4" style={{ backgroundImage: `url(${img2})` }}><img src={bar} className="mt-48 ml-96" /></div>
                                <div onClick={() => navigate("/gallery/food")} className="bg-no-repeat sm:h-[400px] sm:ml-48 ml-32 rounded-md sm:mr-4 sm:mt-28 lg:w-full relative" style={{ backgroundImage: `url(${img3})` }}><img src={cafe} className="relative mt-44 sm:right-44 right-28" /></div>
                             </div>
                             <div className="flex sm:flex-row flex-col w-fit sm:space-y-96 mr-2 mt-20 xl:mt-10 sm:ml-14">
                                <div onClick={() => navigate("/gallery/food")}  className="bg-no-repeat rounded-md sm:ml-12 sm:mt-4 w-full" style={{ backgroundImage: `url(${img4})` }}><img src={pd} className="mt-48 ml-96" /></div>
                                <div onClick={() => navigate("/gallery/food")} className="bg-no-repeat sm:ml-48 ml-32 rounded-md sm:mr-4 mt-10 relative" style={{ backgroundImage: `url(${img5})` }}><img src={ird} className="relative mt-44 sm:right-44 right-28" /></div>
                             </div>
             
              </div>
      
        </div>
  );
}

VenueTemplate.propTypes = {
    venueInfo: PropTypes.shape({
        image: PropTypes.string.isRequired,
        button: PropTypes.object.isRequired,
        venueType: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
