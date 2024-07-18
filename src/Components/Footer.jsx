import img1 from "/icons/facebook.png";
import img2 from "/icons/instagram.png";
import img3 from "/icons/twitter.png";
import logo from "/dark_logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";
import img from "/Textures/4523.png";
import logo1 from "/New/logo3.png";

export function Footer() {
    const navigate = useNavigate();
  
    return (
        <>
        <div className="flex flex-col lg:flex-row bg-customTeal px-3 py-[8vh] pb-10 justify-between sm:justify-around  "
            
        >
            <div className="flex flex-row space-x-36">
            <div className="flex hidden ml-36 md:block  ">
                <img
                    src={logo}
                    className="w-[190px]"
                    alt="Company Logo"
                    onClick={() => navigate('/')}
                />
                <div className="flex sm:ml-1 mt-2 place-content-center ">
                    <img src={logo1} className="w-[200px] contrast-200" alt="" />
                </div>
            </div>
           

            <div className="flex flex-col text-left mr-36 text-black md:text-base sm:text-sm text-sm lg:text-lg tracking-widest font-medium  ">
                
                <p>Terminal Four,Hounslow,TW6 3AF</p>
                <p>United Kingdom</p>

                    <Link to="tel:+442087597755">Tel - +44 (0) 208759 7755</Link>
                    <p><Link to="gmail:franky.rodrigues@hilton.com">Email - franky.rodrigues@hilton.com</Link></p>
                
                <p className="text-cutomOrange mb-5">OXBO-ReserveOcean.com</p>
                <div className="flex space-x-4">
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
                </div>
            </div>
            
            </div>
            </>
    );
}
