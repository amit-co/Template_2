import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '/About/caring(1).png';
import img2 from '/About/caring(2).png';
import img3 from '/About/caring(3).png';
import img4 from '/About/caring(4).png';
import back from "/buttons/Group 46.png";
import img from "/Textures/4525.png";

export function Caring() {
    const navigate = useNavigate();
    return (
        <div className="bg-repeat flex flex-cols-2 items-center justify-center min-h-screen p-4 md:p-10 mt-36" style={{ backgroundImage: `url(${img})` }}>
                   <div className="container mx-auto flex flex-col items-center  ">
                            <button
                                className="self-start text-black text-xl"
                                onClick={() => navigate('/about')}
                            >
                                <img src={back} alt="backward" className="w-8 h-8" />
                            </button>

               
            
                            <div className="max-w-xl text-lg md:text-sm leading-relaxed mt-5 mb-10 ">
                                <div className=" mb-8 ">
                                    <h1 className="text-4xl md:text-3xl text-customGray font-bold ml-24">I</h1>
                                    <h1 className="text-4xl md:text-5xl text-customGray title-font font-medium tracking-widest ">CARING</h1>
                                </div>
                    
                                <p className="text-lg">
                                    Our aim is to provide a welcoming all-day experience rooted in care for our customers, staff, produce, and land.
                                </p>
                                <p className="text-lg">
                                    At OXBO we want our customers to feel as though they are at home. They can stay as long as they want, relaxing all day or evening - grazing on mouth-watering dishes, looked after by our welcoming, attentive staff. Customers will always be encouraged to linger, working on a laptop or reading a paper, even after they've finished their latte or lunch.
                                </p>
                                <p className="text-lg">
                                    Our love and respect for nature and respect for the land and sea means we are responsible and sustainable wherever possible. We lovingly source our ingredients from reputable suppliers who we like to call our partners.
                                </p>
                                <p className="text-lg">
                                    We pride ourselves on the care and attention we bestow to every part of our brand - from typography and color schemes, to our selection of seasonal cocktails and plant-based dishes.
                                </p>
                        
                            </div>
                   </div>   
                            <div className="flex flex-cols-1 md:flex-cols-2 space-x-4 mt-12">
                                <div className="flex flex-col space-y-2 w-full  mx-auto ">
                                    <div className="w-full h-auto">
                                        <img src={img1} alt="Caring 1" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="w-full h-auto">
                                        <img src={img3} alt="Caring 2" className="object-cover w-full h-[72vh]" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 w-full  mx-auto ">
                                    <div className="w-full h-auto mt-4 md:mt-0">
                                        <img src={img2} alt="Caring 3" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="w-full h-auto mt-4 md:mt-0">
                                        <img src={img4} alt="Caring 4" className="object-cover w-full h-full" />
                                    </div>
                                </div>
                            </div>
            
        </div>
    );
}

export default Caring;
