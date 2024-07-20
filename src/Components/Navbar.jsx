import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import img1 from "/icons/facebook.png";
import img2 from "/icons/instagram.png";
import img3 from "/icons/twitter.png";
import img4 from "/icons/Call.png";
import logo from "/dark_logo.png";
import img from "/Textures/4523.png";

export default function Navbar() {
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);
    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState(location.pathname);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };

    const pathsWithoutNavbar = [
        "/",
        "/menu",
        "/giftVoucher",
        "/privateDinning",
        "/gallery",
        "/gallery/food",
        "/gallery/drinks",
        "/gallery/teams",
       

    ];

    const shouldRenderNavbar = !pathsWithoutNavbar.includes(pathname); // Check if the current path is not in the list

    if (!shouldRenderNavbar) {
        return null; // Return null to prevent rendering the navbar
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${isScrolled ? "md:transform md:-translate-y-2/3" : "md:transform md:translate-y-0"}`}>
            <div className={`bg-repeat text-white flex justify-between px-10 items-center transition-opacity duration-300 ${isScrolled ? "md:opacity-0" : "md:opacity-100"}`}
                style={{ backgroundImage: `url(${img})` }}
                    >
                <div className="md:flex hidden space-x-5 2xl:ml-4 mt-10 ">
                    <a href="https://www.facebook.com/yourprofile">
                        <img src={img1} />
                    </a>
                    <a href="https://www.instagram.com/yourprofile">
                        <img src={img2} />
                    </a>
                    <a href="https://twitter.com/yourprofile">
                        <img src={img3} />
                    </a>
                </div>
                <img
                    className="md:w-[140px] sm:w-[130px] z-3 cursor-pointer w-[110px] md:ml-14"
                    src={logo}
                    alt="Company Logo"
                    onClick={() => navigate("/")}
                />
                <div>
                    <div className="md:flex text-2xl items-center text-customBrown hidden space-x-2 2xl:mr-8 mt-10">
                        <img src={img4}
                             className="w-[30px]" /> 
                        <Link to="tel:+442087597755">+44 (0) 208759 7755</Link>
                    </div>
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
                </div>
            </div>
            <div className="flex bg-repeat text-customBrown font-bold text-xl justify-around items-center sm:py-4"
                style={{ backgroundImage: `url(${img})` }}
                >
                <div className="xl:flex lg:flex md:flex hidden md:space-x-2 lg:space-x-4 xl:space-x-12 2xl:space-x-16">
                    <Link to="/" className={`group relative ${selectedNav === '/' ? 'cursor-pointer' : 'cursor-default'}`}  onClick={() => handleNavClick('/')}>
                        <h1>HOME</h1>
                        <div className={`w-full absolute ${selectedNav === '/' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                    <Link to="/bookNow" className={`group relative ${selectedNav === '/bookNow' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/bookNow')}>
                        <h1>BOOK NOW</h1>
                        <div className={`w-full absolute ${selectedNav === '/bookNow' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                    <Link to="/menu" className={`group relative ${selectedNav === '/menu' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/menu')}>
                        <h1>MENU</h1>
                        <div className={`w-full absolute ${selectedNav === '/menu' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                    <div className={`group relative ${selectedNav === '/venue' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/venue')}>
                        <h1
                            onClick={() => navigate("/venue")}
                            onMouseEnter={() => setDisplayVenue(true)}
                            onMouseLeave={() => setDisplayVenue(false)}
                        >
                            VENUE
                        </h1>
                        <div className={`w-full absolute ${selectedNav === '/venue' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                        {displayVenue && (
                            <div
                                onMouseEnter={() => setDisplayVenue(true)}
                                onMouseLeave={() => setDisplayVenue(false)}
                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-[10vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link
                                    to="/venue/restaurant"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    RESTAURANT
                                </Link>
                                <Link
                                    to="/venue/bar"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    BAR
                                </Link>
                                <Link
                                    to="/venue/cafe"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    CAFE
                                </Link>
                                <Link
                                    to="/venue/ird"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    IRD
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/privateDinning" className={`group relative ${selectedNav === '/privateDinning' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                        <h1>PRIVATE DINNING</h1>
                        <div className={`w-full absolute ${selectedNav === '/privateDinning' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                    <Link to="/giftVoucher" className={`group relative ${selectedNav === '/giftVoucher' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/giftVoucher')}>
                        <h1>GIFT VOUCHER</h1>
                        <div className={`w-full absolute ${selectedNav === '/giftVoucher' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                    <Link to="/contact" className={`group relative ${selectedNav === '/contact' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/contact')}>
                        <h1>CONTACT</h1>
                        <div className={`w-full absolute ${selectedNav === '/contact' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                    <div className={`group relative ${selectedNav === '/gallery' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/gallery')}>
                        <h1
                            onClick={() => navigate("/gallery")}
                            onMouseEnter={() => setDisplayGallery(true)}
                            onMouseLeave={() => setDisplayGallery(false)}
                        >
                            GALLERY
                        </h1>
                        <div className={`w-full absolute ${selectedNav === '/gallery' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                        {displayGallery && (
                            <div
                                onMouseEnter={() => setDisplayGallery(true)}
                                onMouseLeave={() => setDisplayGallery(false)}
                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-[10vw]"
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                <Link
                                    to="/gallery/food"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    FOOD
                                </Link>
                                <Link
                                    to="/gallery/drinks"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    DRINKS
                                </Link>
                                <Link
                                    to="/gallery/teams"
                                    className="hover:text-cutomOrange transition-all duration-100"
                                >
                                    TEAMS
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/about" className={`group relative ${selectedNav === '/about' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/about')}>
                        <h1>ABOUT</h1>
                        <div className={`w-full absolute ${selectedNav === '/about' ? 'block' : 'hidden'} absolute h-[4px] bg-customBrown`}></div>
                    </Link>
                </div>
            </div>

            {toggle && (
                <div className=" bg-repeat w-full text-customBrown text-center pb-8 space-x-1 text-xl bg-customGray z-10 absolute"
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
            )}
        </div>
    );
}
