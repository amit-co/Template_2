import { galleryImages } from "../utils/galleryImages";
import Template from '../Components/Template';
import { Quote } from "../Components/Quote";
import camera from "/New/camera.png";
import img1 from "/New/gallery1.png";
import img2 from "/New/gallery2.png";
import img3 from "/New/gallery3.png";

export default function Gallery() {
    return (
        <>
            <div className="flex flex-col bg-customTeal">
                <div className="flex flex-row w-fit items-center mx-auto sm:mt-[10vh] ml-12">
                    <img src={camera} className="w-24 h-24" />
                    <h1 className="text-center font-medium tracking-widest text-Black text-5xl">Gallery</h1>
                </div>
                <div className="md:flex w-full h-full items-center md:space-x-5 md:space-y-0 space-y-5 md:p-10 justify-between">
                    <div className="relative group sm:w-[32%] w-full overflow-hidden">
                        <img src={img1} className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110" />
                        <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                            <h2 className="text-6xl">Food</h2>
                        </div>
                    </div>
                    <div className="relative group sm:w-[32%] w-full overflow-hidden">
                        <img src={img2} className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110" />
                        <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                            <h2 className="text-6xl">Drinks</h2>
                        </div>
                    </div>
                    <div className="relative group sm:w-[32%] w-full overflow-hidden">
                        <img src={img3} className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110" />
                        <div className="absolute top-0 left-0 m-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                            <h2 className="text-6xl">Team</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
