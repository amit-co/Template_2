import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '/About/celebrarory.png';
import back from "/buttons/Group 46.png";
import img from "/Textures/4525.png";

export function Celebraory() {
    const navigate = useNavigate();
    return (
        <div className="bg-repeat flex flex-cols-2 items-center justify-center min-h-screen p-4 md:p-10 mt-36" style={{ backgroundImage: `url(${img})` }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center  ">
                <button
                    className="self-start text-black text-xl ml-2 mt-4"
                    onClick={() => navigate('/about')}
                >
                    <img src={back} alt="backward" className="w-8 h-8" />
                </button>



                <div className="max-w-xl text-lg md:text-sm text-justify leading-relaxed mb-10 ">
                    <div className=" mb-8 ml-10 md:ml-24">
                        <h1 className="text-4xl md:text-3xl text-customGray font-bold ml-36 italic">III</h1>
                        <h1 className="text-4xl md:text-5xl text-customGray title-font font-medium tracking-widest italic">CELEBRAORY</h1>
                    </div>

                    <p className="text-base mx-10 lg:mx-0 lg:text-lg">
                        OXBO is a celebration of our seasonal cycle and local heritage. From the generations of fishermen who harvest the sea, to the seed sowers and the farm hands, the ox that once worked the land and the craft of cultivation that created plenty.

                    </p>
                    <p className="text-base mx-10 lg:mx-0  lg:text-lg">
                        We are proud of the provenance of our ingredients, and love to champion our suppliers, knowing that their produce is authentic, ethical and respectful of nature.

                    </p>
                    <p className="text-base mx-10 lg:mx-0 lg:text-lg">
                        Every dish and drink on the menu is an opportunity to honour quality produce, authentic flavours and to celebrate each of the seasons.


                    </p>
                    <p className="text-base mx-10 lg:mx-0 lg:text-lg">
                        We love to show our appreciation and joy for food through beautiful presentation in the way each plate, cabinet or counter is designed. Smoothies and juices are arranged on ice, glistening homemade pastries are displayed generously.


                    </p>
                    <p className="text-base mx-10 lg:mx-0 lg:text-lg">
                        When customers want to drink to a special moment or simply be entertained, our mixologists are on hand to create an exciting cocktail in front of them.
                    </p>

                </div>
                <div className="flex ml-10 mr-10 md:mr-0 mb-4 md:ml-36 mt-0 md:mt-12">

                    <img src={img1} alt="Celebraory 1" className="object-cover w-[90vh] mr-20 h-full" />

                </div>
            </div>

        </div>
    );
}

export default Celebraory;
