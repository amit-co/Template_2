import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import img from "/Textures/4523.png";

export function Navbar() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
   
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);
    const { pathname } = useLocation();
    
    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState(location.pathname);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };

    const pathsWithoutNavbar = [
        "/",
       


    ];

    const shouldRenderNavbar = !pathsWithoutNavbar.includes(pathname); // Check if the current path is not in the list

    if (!shouldRenderNavbar) {
        return null; // Return null to prevent rendering the navbar
    }

    return (
        <div className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 `}>
            <div className={` top-0 left-0 right-0 z-10 transition-transform duration-300 `}>
                <div className="text-white">
                    {toggle ? (
                        <RxCross2
                            onClick={() => setToggle(false)}
                            className="md:hidden cursor-pointer text-4xl"
                        />
                    ) : (
                        <IoMenuOutline
                            onClick={() => setToggle(true)}
                            className="md:hidden cursor-pointer text-3xl"
                        />
                    )}
                </div>
                <div className={`bg-customWhite text-white  flex justify-between px-10 items-center transition-opacity duration-300 `}

                >
                    <button onClick={() => navigate("/")} className="flex w-20 text-center py-6">
                        <h1 className="text-black text-4xl">Restaurant Name</h1>
                    </button>

                    <div className="flex bg-customWhite text-customBrown font-bold text-xl justify-around items-center sm:py-6"

                    >
                        <div className="xl:flex lg:flex md:flex hidden md:space-x-2 lg:space-x-4 text-customBlack2  text-2xl font-medium xl:space-x-32 mr-28  2xl:space-x-16">
                            <Link to="/privateDinning" className={`group relative ${selectedNav === '/privateDinning' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                                <h1>PRIVATE DINING</h1>
                                <div className={`w-full absolute ${selectedNav === '/privateDinning' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                            <Link to="/about" className={`group relative ${selectedNav === '/about' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/about')}>
                                <h1>ABOUT US</h1>
                                <div className={`w-full absolute ${selectedNav === '/about' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                            <Link to="/menu" className={`group relative ${selectedNav === '/menu' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/menu')}>
                                <h1>MENU</h1>
                                <div className={`w-full absolute ${selectedNav === '/menu' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                            <Link to="/giftVoucher" className={`group relative ${selectedNav === '/giftVoucher' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/giftVoucher')}>
                                <h1>GIFT VOUCHER</h1>
                                <div className={`w-full absolute ${selectedNav === '/contact' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className={` bg-repeat w-full transition-all duration-500 ease-in-out text-customBrown text-center pb-8 space-x-1 text-xl bg-customGray z-10 ${toggle ? "translate-y-0" : "translate-y-[-100vh]"}  absolute`}
                style={{ backgroundImage: `url(${img})` }}
            >
                <Link to="/" className="cursor-pointer ">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        HOME
                    </h1>
                </Link>
                <Link to="/bookNow" className="w-fit mx-auto relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        BOOK NOW
                    </h1>
                </Link>

                <Link to="/menu" className="w-fit mx-auto cursor-pointer relative">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        MENU
                    </h1>
                </Link>
                <Link
                    to="/venue"
                    onMouseEnter={() => setDisplayVenue(true)}
                    onMouseLeave={() => setDisplayVenue(false)}
                    className="cursor-pointer"
                >
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        VENUE
                    </h1>
                    {displayVenue && (
                        <div
                            onMouseEnter={() => setDisplayVenue(true)}
                            onMouseLeave={() => setDisplayVenue(false)}
                            className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <Link onClick={() => setToggle(false)}
                                to="/venue/restaurant"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                RESTAURANT
                            </Link>
                            <Link onClick={() => setToggle(false)}
                                to="/venue/bar"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                BAR
                            </Link>
                            <Link onClick={() => setToggle(false)}
                                to="/venue/cafe"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                CAFE
                            </Link>
                            <Link onClick={() => setToggle(false)}
                                to="/venue/ird"
                                className="hover:text-customPink transition-all duration-100"
                            >
                                IRD
                            </Link>
                            <RxCross2 onClick={() => setDisplayVenue(false)} className="absolute text-3xl top-[-7px] right-3" />

                        </div>
                    )}
                </Link>
                <Link to="/privateDinning" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        PRIVATE DINNING
                    </h1>
                </Link>
                <Link to="/giftVoucher" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        GIFT VOUCHER
                    </h1>
                </Link>
                <Link to="/contact" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        CONTACT
                    </h1>
                </Link>
                <Link to="/gallery" onMouseEnter={() => setDisplayGallery(true)} onMouseLeave={() => setDisplayGallery(false)} className="relative cursor-pointer">
                    <h1
                        className={` hover:text-customPink`}
                        onClick={() => setToggle(false)}
                    >
                        GALLERY
                    </h1>
                    {displayGallery && (
                        <div className="relative">
                            <div
                                onMouseEnter={() => setDisplayGallery(true)}
                                onMouseLeave={() => setDisplayGallery(false)}
                                className="bg-repeat rounded-md flex shadow-md flex-col z-10 p-2 space-y-3 absolute left-1/2 transform -translate-x-1/2 w-[60vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link onClick={() => setToggle(false)}
                                    to="/gallery/food"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    FOOD
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/gallery/drinks"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    DRINKS
                                </Link>
                                <Link onClick={() => setToggle(false)}
                                    to="/gallery/teams"
                                    className="hover:text-customPink transition-all duration-100"
                                >
                                    TEAM
                                </Link>
                                <RxCross2 onClick={() => setDisplayGallery(false)} className="absolute text-3xl top-[-7px] right-3" />

                            </div>
                        </div>

                    )}
                </Link>
                <Link to="/about" className="relative cursor-pointer">
                    <h1
                        className="hover:text-customPink"
                        onClick={() => setToggle(false)}
                    >
                        ABOUT
                    </h1>
                </Link>
            </div>

        </div>
    );
}
