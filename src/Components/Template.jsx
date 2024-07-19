import { useState } from "react";
import imgB from "/New/bgn.png";
import back from "/buttons/Group 146.png";
import { useNavigate } from 'react-router-dom';

export default function Template({ images, Heading }) {
    const navigate = useNavigate();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [visibleImagesCount, setVisibleImagesCount] = useState(8);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const handleLoadMore = () => {
        setVisibleImagesCount((prevCount) => Math.min(prevCount + 8, images.length));
    };

    return (
        <>
            <div className="bg-cover pb-10 " style={{ backgroundImage: `url(${imgB})` }}>
                <div className=" flex flex-row  mr-10" >
                    <button
                        className="self-start mt-10 ml-10"
                        onClick={() => navigate('/')}
                    >
                        <img src={back} alt="backward" className="w-10 h-10 object-contain" />
                    </button>
                    <h1 className=" font-bold tracking-widest text-customBrown3 text-6xl mb-2 mt-10 mx-auto">{Heading}</h1>
              
                </div>
            
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto p-5">
                {images.slice(0, visibleImagesCount).map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image}
                            alt={`gallery ${index + 1}`}
                            className="cursor-pointer w-full h-60 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
               </div>
            {visibleImagesCount < images.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleLoadMore}
                            className="text-customBlack2 text-lg mt-5  tracking-widest rounded-lg w-fit px-10 py-4 font-semibold bg-customSalmon "
                    >
                        Load More
                    </button>
                </div>
            )}

            {selectedImageIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            className="absolute top-2 right-2 text-white bg-black rounded-full p-2 hover:bg-opacity-75 transition"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <button
                            className="absolute top-1/2 left-2 text-white bg-black rounded-full p-2 hover:bg-opacity-75 transition transform -translate-y-1/2"
                            onClick={handlePrevImage}
                        >
                            &#10094;
                        </button>
                        <img src={images[selectedImageIndex]} alt="Selected gallery" className="max-h-screen max-w-screen" />
                        <button
                            className="absolute top-1/2 right-2 text-white bg-black rounded-full p-2 hover:bg-opacity-75 transition transform -translate-y-1/2"
                            onClick={handleNextImage}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
                )}
                </div>
        </>
    );
}
