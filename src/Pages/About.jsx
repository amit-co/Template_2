import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from "/Menu/IMG_1.PNG?url";
import img1 from "/About/Frame 33.png";
import img2 from "/About/Frame 48.png";
import img3 from "/About/III CELEBRAORY.png";
import img4 from "/About/Frame 35.png";
import celebrarory from "/About/celebrarory.png";
import honest from "/About/honest.png";
import back from "/buttons/Group 46.png";

export default function About() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

  

    const handleCloseModal = () => {
        setSelectedImage(null);c
    };

    return (
        <>
            <div className="h-full bg-fixed bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
                <div className="flex mb-64"></div>
                <div onClick={() => navigate('/caring')}>
                    <img src={img1} className="mx-auto" />
                </div>
                <div onClick={() => navigate('/sociable')}>
                    <img src={img2} className="mx-auto" />
                </div>
                <div onClick={() => handleMenuOpen(celebrarory)}>
                    <img src={img3} className="mx-auto" />
                </div>
                <div onClick={() => handleMenuOpen(honest)}>
                    <img src={img4} className="mx-auto" />
                </div>
                <div className="flex mt-36"></div>
                {selectedImage && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-75">
                        <div className="relative">
                            <button
                                className="absolute top-0 left-0 mt-2 mr-2 text-black text-xl"
                                onClick={handleCloseModal}
                            >
                                <img src={back} alt="backward" />
                            </button>
                            <img src={selectedImage} className="max-w-[200vh] max-h-screen" alt="Menu Item" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
