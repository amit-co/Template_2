import logo from "/New/logo3.png";
import cmpny from "/New/logo.png";
import img from "/New/home_bg.png";
import BookNow from "./BookNow";
import  Venue  from "./Venue";
import { RestrauntLocation } from "../Components/RestrauntLocation";
import Gallery from "../Pages/Gallery";
import img1 from "/New/bgn.png";
import { Footer } from "../Components/Footer";

export default function Home() {
    return (
        <>
            <div className="bg-cover" style={{ backgroundImage: `url(${img1})` }}>
        <div className="flex w-full h-screen bg-cover sm:w-full mx-auto" style={{ backgroundImage: `url(${img})` }}>
            <div className="flex flex-row justify-between w-full h-full ">
                <div className="w-2/4 lg:w-1/4 bg-white text-white text-center bg-opacity-20 backdrop-blur p-2 lg:p-8">
                    <div className="text-center mb-4 mt-10">
                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white-800 mb-4">ReserveOcean</h1>
                        <img src={cmpny} alt="OXBO Logo" className="w-20 h-20 mx-auto" />
                    </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white-800 text-center mb-4 mt-10 tracking-widest">Welcome</h2>
                    <p className="text-xs lg:text-sm text-white font-sans text-center mb-6">
                            Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity.
                            From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients.
                            
                    </p>
                        <div onClick="" className="text-customWhite text-sm lg:text-lg mt-8  tracking-widest w-fit px-10 py-2 font-semibold bg-clip-text border-[2px] border-whitw-300 ml-2 lg:ml-12">Find A Table</div>
                    <div className="flex sm:ml-1 mt-2 place-content-center ">
                        <img src={logo} className="w-[200px] contrast-200 mt-2 mr-2 lg:mr-8 " alt="" />
                    </div>
                </div>

                <div className="flex flex-col ml-10 justify-center w-2/5 lg:w-1/5 bg-white bg-opacity-20 backdrop-blur-sm p-0 lg:p-8">
                    <nav className="flex flex-col text-white md:text-xl sm:text-lg text-base lg:text-2xl ml-6 lg:ml-14 text-center lg:text-left space-y-4">
                        <a href="/" className=" hover:text-blue-500">Home</a>
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
            </div>
            <BookNow />
            <Venue />
            <Gallery />
                <RestrauntLocation />
                

                <Footer />
                </div>
        </>

    );
}
