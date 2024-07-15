import logo from "/New/logo3.png";
import cmpny from "/New/logo.png";
import img from "/New/home_bg.png";
import BookNow from "./BookNow";
import { Menus } from "../Components/Menus";
import Venue from "./Venue";
import { RestrauntLocation } from "../Components/RestrauntLocation";
import Gallery from "../Pages/Gallery";
import img1 from "/New/bgn.png";
import { Footer } from "../Components/Footer";

export default function Home() {
    return (
        <>
            <div className="bg-cover" style={{ backgroundImage: `url(${img1})` }}>
                <div className="flex place-content-between w-full h-screen bg-cover mx-auto" style={{ backgroundImage: `url(${img})` }}>
                    <div className="w-4/12 xl:w-1/4 bg-white bg-opacity-20 backdrop-blur p-4 lg:p-8 flex flex-col items-center justify-center">
                        <div className="text-center mb-4 mt-10">
                            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">ReserveOcean</h1>
                            <img src={cmpny} alt="OXBO Logo" className="w-20 h-20 mx-auto" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 mt-10 tracking-widest">Welcome</h2>
                        <p className="text-xs lg:text-sm text-white font-sans text-center mb-6">
                            Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity.
                            From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients.
                        </p>
                        <div className="text-customWhite text-sm lg:text-lg mt-8 tracking-widest w-fit px-10 py-2 font-semibold bg-clip-text border-[2px] border-white ml-2 lg:ml-12 cursor-pointer hover:text-blue-500">
                            Find A Table
                        </div>
                        <div className="flex mt-6 justify-center">
                            <img src={logo} className="w-[200px] contrast-200 mt-2 mr-2 lg:mr-8" alt="Logo" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-4/12 bg-white bg-opacity-20 backdrop-blur-sm p-8 ">
                        <nav className="flex flex-col text-white text-lg md:text-xl lg:text-2xl text-left space-y-4 mt-12">
                            <a href="/" className="hover:text-blue-500">Home</a>
                            <a href="/bookNow" className="hover:text-blue-500">Book Now</a>
                            <a href="/" className="hover:text-blue-500">Menu</a>
                            <a href="/" className="hover:text-blue-500">Venue</a>
                            <a href="/" className="hover:text-blue-500">Private Dining</a>
                            <a href="/" className="hover:text-blue-500">Gallery</a>
                            <a href="/" className="hover:text-blue-500">Gift Voucher</a>
                            <a href="/" className="hover:text-blue-500">Contact</a>
                            <a href="/" className="hover:text-blue-500">About</a>
                        </nav>
                    </div>
                </div>
                <BookNow />
                <Menus />
                <Venue />
                <Gallery />
                <RestrauntLocation />
                <Footer />
            </div>
        </>
    );
}
