import img from "/Gallery/img11.jpeg";
import logo from "/dark_logo.png";
import { IoIosArrowForward } from "react-icons/io";
import Discount from "../Components/Discount";
import img1 from "/Gallery/img6.jpeg";


export default function Gift() {
  

    return (
    
        <div className="flex flex-cols-3 justify-center sm:mt-[32vh] mt-[10vh] sm:space-x-3 sm:flex md:w-11/12 md:max-lg:w-9/12 md:mx-10">
            
            <div className="flex md:w-11/12 w-full object-contain mb-10 mx-auto">
                <img src={img} alt="" />
            </div>

            <div className="flex w-9/12 mt-24 mx-auto">
            <Discount />
            </div>

            <div className="sm:w-7/12 md:w-6/12 md:max-lg:5/12  w-11/12 mb-10 mx-auto ">

                <div className="flex bg-cover opacity-50" style={{ backgroundImage: `url(${img1})` }}>

                    <img src={logo} className="px-5 mt-5 w-11/12 mx-auto flex bg-cover opacity-50 " alt="" />
                </div>
               
                <div className="px-3 text-customBlack2 bg-customPink2" >
                    <h1 className="text-xl font-semibold ">Packaging and delivery</h1>
                    <h1 className="mt-4">
                        Add your personal message during the checkout process and choose to
                        have your voucher delivered in our beautiful gift packaging or via
                        email.
                    </h1>
                    <div className="flex mt-5 justify-between">
                        <li>Email delivery</li>
                        <h1>FREE</h1>
                    </div>
                    <div className="flex justify-between">
                        <li>Royal Mail 1st Class</li>
                        <h1>£2.95</h1>
                    </div>
                    <div className="flex justify-between">
                        <li>Royal Mail Special Delivery</li>
                        <h1>£7.95</h1>
                    </div>
                </div>
                <div className="flex border-l-0 border-r-0  items-center justify-between py-6 px-4 border border-customBlack2 bg-customPink2">
                    <h1 className="text-customBrown2">Ask a Question</h1>
                    <IoIosArrowForward className="text-2xl text-customBrown2" />
                </div>
                <div className="flex border-l-0 border-t-0 border-r-0 items-center justify-between py-6 px-4 border bg-customPink2">
                    <h1 className="text-customBrown2">Terms and Conditions</h1>
                    <IoIosArrowForward className="text-2xl text-customBrown2" />
                </div>
            </div>
                
        </div>
            
    );
}
