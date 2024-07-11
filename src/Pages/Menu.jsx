import React, { useState } from 'react';
import img from "/FoodImages/Food11.jpeg";
import img1 from "/Textures/4525.png";
import img2 from "/Pdf/CafeKitchen.jpg";
import img3 from "/Pdf/IRD-Menu.jpg";
import img4 from "/Pdf/CafeMenu.jpg";
import img5 from "/FoodImages/BreakfastMenu.jpg";
import barSnacks from "/FoodImages/BarSnacks.jpg";
import { Reserve } from "../Components/Reserve";
import barsnacks from "/Menu/Group 15.png";
import  Ird from "/Menu/Group 16.png";
import breakfast from "/Menu/Group 17.png";
import kitchen from "/Menu/Group 18.png";
import cafe from "/Menu/Group 19.png";

export default function Menu() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleMenuOpen = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-repeat" style={{ backgroundImage: `url(${img1})` }}>
            <div
                className="bg-fixed sm:flex py-24 bg-cover"
                style={{ backgroundImage: `url(${img})` }}
            >
                <div className="w-full mt-32">
                    <div className="flex flex-wrap justify-center gap-5 mb-12">
                        <div className="flex bg-customBeige rounded-lg w-64 md:w-80 lg:w-[400px] p-4" onClick={() => handleMenuOpen(barSnacks)}>
                            <img src={barsnacks}  />
                        </div>
                        <div className="flex bg-customBeige rounded-lg w-64 md:w-80 lg:w-[400px] p-4" onClick={() => handleMenuOpen(img2)}>
                            <img src={kitchen} />
                        </div>
                            <div className="flex bg-customBeige rounded-lg w-64 md:w-80 lg:w-[400px] p-4" onClick={() => handleMenuOpen(img3)}>
                                <img src={Ird} />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="flex bg-customBeige rounded-lg w-64 md:w-80 lg:w-[400px] p-4" onClick={() => handleMenuOpen(img4)}>
                            <img src={cafe}  />
                        </div>
                        <div className="flex bg-customBeige rounded-lg w-64 md:w-80 lg:w-[400px] p-4" onClick={() => handleMenuOpen(img5)}>
                            <img src={breakfast}  />
                        </div>
                    </div>
                </div>
            </div>
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 mt-2 mr-2 text-white text-xl"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <img src={selectedImage} className="max-w-full max-h-screen md:max-w-lg md:max-h-3/4 lg:max-w-xl lg:max-h-3/4" alt="Menu Item" />
                    </div>
                </div>
            )}
            <div>
                <Reserve />
            </div>
        </div>
    );
}
