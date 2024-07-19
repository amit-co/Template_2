import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img6 from "/New/bgn.png";
import { Reservation } from "../Components/Reservation";


export default function BookNow() {
    const [selectedNav, setSelectedNav] = useState(location.pathname);
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

    return (
        <div>
            <div className="bg-fixed bg-cover " style={{ backgroundImage: `url(${img6})` }}>
              <div className={` top-0 left-0 right-0 z-10 transition-transform duration-300 ${isFixed ? 'fixed' : 'relative'}`}>
                <div className={`bg-customWhite text-white  flex justify-between px-10 items-center transition-opacity duration-300 `}
                   
                    >
                        <div   className="flex w-20 text-center py-6">
                   <h1 className="text-black text-4xl">Restaurant Name</h1>
                      </div>
                
                    <div className="flex bg-customWhite text-customBrown font-bold text-xl justify-around items-center sm:py-6"
                        
                    >
                        <div className="xl:flex lg:flex md:flex hidden md:space-x-2 lg:space-x-4 text-customBlack2  text-2xl font-medium xl:space-x-32 mr-28  2xl:space-x-16">
                                <Link to="/privateDinning" className={`group relative ${selectedNav === '/' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                                <h1>PRIVATE DINING</h1>
                                <div className={`w-full absolute ${selectedNav === '/' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
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

                <div className="flex bg-customTeal h-16 lg:h-20 sm:h-16 mb-6 items-center justify-center ">
                    <p className="text-xs sm:text-lg lg:text-xl text-customBlack2 mx-2 sm:mx-3 text-center place-items-center sm:text-left">
                        Terminal Four, Hounslow, TW6 3AF, United Kingdom | +44 (0) 208759 7755 | franky.rodrigues@hilton.com | OXBO-ReserveOcean.com
                    </p>
                </div>

                <h2 className="md:text-3xl sm:text-2xl text-2xl lg:text-5xl font-bold text-customBlack2 text-center mb-4 mt-8 tracking-widest">Book Now</h2>

                <Reservation />

            </div>
           
        </div>
    );
}
