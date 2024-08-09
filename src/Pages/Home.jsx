import logo from "/New/logo3.png";
import cmpny from "/New/logo.png";
import img from "/drinksImages/Drinks1.jpeg";
import { Menus } from "../Components/Menus";
import Venue from "./Venue";
import { RestrauntLocation } from "../Components/RestrauntLocation";
import imgB from "/New/bgn.png";
import camera from "/New/camera.png";
import img1 from "/New/gallery1.png";
import img2 from "/New/gallery2.png";
import img3 from "/New/gallery3.png";
import { Link, useNavigate } from 'react-router-dom';
import { Reservation } from "../Components/Reservation";
import { useState } from "react";


export default function Home() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(false);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
    return (
        <>
            <div className="bg-cover " style={{ backgroundImage: `url(${imgB})` }}>
                <div className="hidden md:block">
                <div className="flex  place-content-between w-full h-screen bg-cover  mx-auto" style={{ backgroundImage: `url(${img})` }}>
                    <div className="w-4/12  xl:w-1/4 bg-white bg-opacity-20 backdrop-blur p-4 lg:p-8 flex flex-col items-center justify-center">
                        <div className="text-center mb-4 lg:mt-10">
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">ReserveOcean</h1>
                            <img src={cmpny} alt="OXBO Logo" className="w-20 h-20 mx-auto" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 mt-10 tracking-widest">Welcome</h2>
                        <p className="text-xs lg:text-sm text-white font-sans text-center mb-6">
                            Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity.
                            From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients.
                        </p>
                        <div className="text-customWhite text-sm lg:text-lg mt-8 tracking-widest w-fit px-10 py-2 font-semibold bg-clip-text border-[2px] border-white ml-2 cursor-pointer hover:text-blue-500">
                            Find A Table
                        </div>
                        <div className="flex mt-6 justify-center">
                            <img src={logo} className="w-[200px] contrast-200 mt-2 mr-2 lg:mr-8" alt="Logo" />
                        </div>
                    </div>

                    <div className="flex flex-col  items-center w-3/12 bg-white bg-opacity-20 backdrop-blur-sm p-8 ">
                        <nav className="flex flex-col text-white text-xl md:text-2xl lg:text-xl text-left 2xl:space-y-14 md:space-y-20 md:mt-20 2xl:mt-20">
                            <a href="/" className="hover:text-blue-500">HOME</a>
                            <a href="/venue" className="hover:text-blue-500">VENUE</a>
                            <a href="/privateDinning" className="hover:text-blue-500">PRIVATE DINNING</a>
                            <a href="/gallery" className="hover:text-blue-500">GALLERY</a>
                            <a onClick={handleClick} className="hover:text-blue-500 cursor-pointer">CONTACT</a>
                            <a href="/about" className="hover:text-blue-500">ABOUT</a>


                        </nav>
                    </div>
                    </div>
                </div>
                <Reservation />
                <Menus />
                <div>
                <Venue />
                </div>
                    <div className="flex flex-col  bg-customTeal">
                        <div className="flex flex-row w-fit items-center mx-auto sm:mt-6 mt-4 ml-12">
                            <img src={camera} className="w-12 lg:w-24 h-12 lg:h-24" />
                            <h1 className="text-center font-medium tracking-widest text-Black md:text-4xl sm:text-3xl text-4xl ml-2 lg:text-5xl">Gallery</h1>
                        </div>
                        <div className="sm:flex w-full h-full items-center md:space-x-5 md:space-y-0 space-y-5 md:p-10 justify-between mt-4 pb-6">
                            <div className="relative group sm:w-[32%] w-full overflow-hidden">
                                <Link to="/gallery/food">
                                <img src={img1}  className="sm:w-full w-[75%] mx-auto h-auto transition-transform duration-300 ease-out group-hover:scale-110" />
                                </Link>
                                    <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h2 className="text-6xl ml-10 sm:ml-0">Food</h2>
                                </div>
                            </div>
                            <div className="relative group sm:w-[32%] w-full overflow-hidden">
                                <Link to="/gallery/drinks">
                                <img src={img2} className="sm:w-full w-[75%]  mx-auto h-auto transition-transform duration-300 ease-out group-hover:scale-110" />
                                </Link>
                                <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h2 className="text-6xl ml-10 sm:ml-0">Drinks</h2>
                                </div>
                            </div>
                                <div className="relative group sm:w-[32%] w-full overflow-hidden">
                                    <Link to="/gallery/teams">
                                <img src={img3} className="sm:w-full w-[75%]  mx-auto h-auto transition-transform duration-300 ease-out group-hover:scale-110" />
                                </Link>
                                <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <h2 className="text-6xl ml-10 sm:ml-0">Team</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                
                <RestrauntLocation />
                <div className="flex flex-col items-center  pb-4">
                    <h1 className="text-2xl md:text-4xl text-customBrown3 tracking-widest">Want To Know More ?</h1>
                    <button onClick={() => navigate("/about")} className="border bg-customTeal text-xl md:text-3xl px-3 py-1 my-6 rounded-lg">About Us</button>
                </div>
            </div>
        </>
    );
}
