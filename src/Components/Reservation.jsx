import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuClock } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate, useLocation } from "react-router-dom";
import img6 from "/New/bgn.png";
import img from "/Textures/4523.png";
import logo from "/New/logo3.png";


export function Reservation() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);
    const { pathname } = useLocation();

    const location = useLocation();
    const [selectedNav, setSelectedNav] = useState(location.pathname);
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [noOfPeople, setNoOfPeople] = useState("2 people");
    const [isFixed, setIsFixed] = useState(false);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to get the nearest 30-minute interval
    const getNearestThirtyMinuteInterval = (date) => {
        const minutes = date.getMinutes();
        const roundedMinutes = Math.ceil(minutes / 30) * 30;
        if (roundedMinutes === 60) {
            date.setHours(date.getHours() + 1);
            date.setMinutes(0);
        } else {
            date.setMinutes(roundedMinutes);
        }
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.toTimeString().slice(0, 5);
    };

    const [selectedTime, setSelectedTime] = useState(getNearestThirtyMinuteInterval(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedTime(getNearestThirtyMinuteInterval(new Date()));
        }, 60000); // Update every minute to keep the default time accurate
        return () => clearInterval(interval);
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date.toISOString().split('T')[0]);
    };

    /* const clickHandler = () => {
         const formData = {
             date: selectedDate,
             time: selectedTime,
             people: noOfPeople
         };
         const queryString = new URLSearchParams(formData).toString();
         window.location.href = `https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine?${queryString}`;
     };*/

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleNoOfPeople = (e) => {
        setNoOfPeople(e.target.value);
    };

    const generateTimeOptions = () => {
        const options = [];
        const start = new Date();
        start.setHours(8, 0, 0, 0); // Start time: 8:00
        const end = new Date();
        end.setHours(23, 0, 0, 0); // End time: 23:00

        while (start <= end) {
            options.push(start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            start.setMinutes(start.getMinutes() + 30); // Increment by 30 minutes
        }

        return options;
    };

    return (
        <div className="bg-fixed bg-cover " style={{ backgroundImage: `url(${img6})` }}>
            <div className={` top-0 left-0 right-0 z-10 transition-transform duration-300 ${isFixed ? 'fixed' : 'relative'}`}>
                <div className={`bg-customWhite text-white  flex justify-between px-10 items-center transition-opacity duration-300 `}

                >
                    <button onClick={() => navigate("/")} className="flex w-20  text-center py-6">
                        <h1 className="text-black text-3xl lg:text-4xl">Restaurant Name</h1>
                    </button>
                    <div className="text-customBrown fixed right-4">
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

                    <div className="flex bg-customWhite text-customBrown font-bold text-xl justify-around items-center sm:py-6"

                    >
                        <div className="xl:flex lg:flex md:flex hidden md:space-x-4 lg:space-x-4 text-customBlack2  text-xl font-medium xl:space-x-32 mr-20  2xl:space-x-16">
                            <Link to="/privateDinning" className={`group relative ${selectedNav === '/privateDinning' ? 'font-bold text-3xl cursor-pointer' : 'font-medium cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                                <h1>PRIVATE DINING</h1>

                            </Link>
                            <Link to="/about" className={`group relative ${selectedNav === '/about' ? 'font-bold text-3xl cursor-pointer' : 'font-medium cursor-default'}`} onClick={() => handleNavClick('/about')}>
                                <h1>ABOUT US</h1>

                            </Link>
                            <Link to="/menu" className={`group relative ${selectedNav === '/menu' ? 'font-bold text-3xl cursor-pointer' : 'font-medium cursor-default'}`} onClick={() => handleNavClick('/menu')}>
                                <h1>MENU</h1>

                            </Link>
                            <Link to="/giftVoucher" className={`group relative ${selectedNav === '/giftVoucher' ? 'font-bold text-3xl cursor-pointer' : 'font-medium cursor-default'}`} onClick={() => handleNavClick('/giftVoucher')}>
                                <h1>GIFT VOUCHER</h1>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className={` bg-customBrown3 w-full md:hidden transition-all duration-500 ease-in-out text-customWhite text-center pb-8 space-x-1 text-xl bg-customGray z-10 ${toggle ? "translate-y-0" : "translate-y-[-100vh]"}  absolute`}

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

            <div className="flex hidden md:block bg-customTeal h-16 xl:h-12 mb-6 items-center justify-center ">
                <p className="text-xs sm:text-lg lg:text-xl text-customBlack2 text-center  place-items-center ">
                    Terminal Four, Hounslow, TW6 3AF, United Kingdom | +44 (0) 208759 7755 | franky.rodrigues@hilton.com | OXBO-ReserveOcean.com
                </p>
            </div>

            <div className="md:hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-customBrown3 text-center mb-4 mt-6 tracking-widest">Welcome</h2>
                <p className="text-sm sm:text-lg text-customBrown3 mx-4 sm:mx-16 font-sans text-center mb-6">
                    Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity.
                    From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients.
                </p>
                <div className="flex justify-center items-center ">
                    <div className="text-customBlack2 bg-customTeal  text-base mt-8 tracking-widest w-fit px-10 py-2 font-semibold border-[2px] cursor-pointer hover:text-blue-500">
                        Find A Table
                    </div>
                </div>
                <div className="flex mt-6 justify-center">
                    <img src={logo} className="w-[200px] contrast-200 mt-2 mr-2 lg:mr-8" alt="Logo" />
                </div>
            </div>
            <div className="flex md:hidden bg-customTeal h-16 lg:h-20 sm:h-16 mb-6 mt-4 items-center justify-center ">
                <p className="text-xs sm:text-base md:text-lg text-customBlack2 mx-2 sm:mx-20 md:mx-24 text-center place-items-center sm:text-left">
                    Terminal Four, Hounslow, TW6 3AF, United Kingdom | +44 (0) 208759 7755 | franky.rodrigues@hilton.com | OXBO-ReserveOcean.com
                </p>
            </div>

            <h2 className="md:text-3xl sm:text-2xl text-2xl lg:text-5xl font-bold text-customBlack2 text-center mb-4 mt-8 tracking-widest">Book Now</h2>
            <div className="flex xl:flex-row  flex-col items-center lg:ml-8 xl:space-x-20 p-6 ">
                <div>
                    <h1 className="text-2xl tracking-widest font-semibold ">Party Size</h1>
                    <div className="relative flex items-center border-customBlack2 border-[2px] rounded-lg sm:w-[40vh] w-72 h-14">
                        <select id="peopleSelect" value={noOfPeople} onChange={handleNoOfPeople} className="w-full pl-10 pr-4 text-xl outline-none bg-clip-text">
                            {Array.from({ length: 19 }, (_, i) => i + 2).map(number => (
                                <option key={number} value={number}>{number} People</option>
                            ))}
                        </select>
                        <GoPeople className="absolute left-3 text-xl " />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl tracking-widest font-semibold ">Date</h1>
                    <div className="relative flex items-center border-customBlack2 border-[2px] rounded-lg sm:w-[40vh] w-72 h-14">
                        <DatePicker
                            selected={new Date(selectedDate)}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={15}
                            className="w-full pl-10 pr-4 text-xl  outline-none bg-clip-text"
                        />
                        <FaRegCalendar className="absolute left-3 text-xl " />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl tracking-widest font-semibold ">Time</h1>
                    <div className="relative flex items-center border-customBlack2 border-[2px] rounded-lg sm:w-[40vh] w-72 h-14">
                        <select id="timingSelect" value={selectedTime} onChange={handleTimeChange} className="w-full pl-10 pr-4 text-xl outline-none bg-clip-text">
                            {generateTimeOptions().map(time => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                        <LuClock className="absolute left-3 text-xl " />
                    </div>
                </div>

                <button onClick={() => navigate('/bookNow')} className="sm:w-[40vh] w-56 h-14 mt-8 tracking-widest bg-customBrown2 text-white text-lg  font-semibold rounded-lg transition duration-300 hover:bg-orange-600">
                    Find a Table
                </button>


            </div>
        </div>
    );
}