import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import { toast } from "react-toastify";
import { z } from "zod"
import img from "/Textures/4525.png"
import img1 from "/Illustrations/Location.png";
import img2 from "/Illustrations/At.gif";
import img3 from "/Illustrations/Cs.gif";
import img4 from "/Illustrations/Wallet.gif";
import img5 from "/Illustrations/virtual-assistant 1.png";
import img6 from "/Illustrations/Phone.gif";
import img7 from "/Illustrations/Online Euro.gif";
import img8 from "/Illustrations/MCC.gif";
import img9 from "/Illustrations/Gmail.gif";
import img10 from "/Textures/Vector 87.png";

export default function Contact() {
    const schema = z.object({
        name: z
          .string()
          .min(1, "First name is required")
          .max(50, "First name must be at most 50 characters"),
        email: z
          .string()
          .email("Invalid email address")
          .max(100, "Email must be at most 100 characters"),
        message: z
          .string()
          .min(10,"Comment must be at least 10 characters long")
          .max(1000,"Comment number must be at most 1000 characters long"),
      });

    const initialFormData = {
        name : "",
        email : "",
        message : "",
        tag : "CT"
    }

    const [formData,setFormData] = useState(initialFormData)

    const [errors,setErrors] = useState({})

    const changeHandler=(e)=>{
        const {name,value} = e.target
        setFormData(prev=>({
            ...prev,
            [name] : value
        }))
    }

    const clickHandler=()=>{
        try{
            schema.parse(formData)
            axios({
                method:"post",
                url : `${config.url}/messages`,
                data : formData
            })
            .then((res)=>{
                toast.success('Message sent', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setFormData(initialFormData)
                
            })
            .catch((e)=>{
                console.log(e)
            })
        }catch(error){
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.reduce((acc, curr) => {
                  acc[curr.path[0]] = curr.message;
                  return acc;
                }, {});
                setErrors(errorMessages);
              }
        }
       
    }

    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col items-center bg-repeat justify-between  mx-auto mt-32" style={{ backgroundImage: `url(${img})` }}>
               <div className="flex flex-col items-center">
                                <div className="flex flex-wrap justify-center items-center mt-4">
                                    <img src={img1} alt="Location" className="w-24 mb-36 rotate-6" />
                                    <img src={img2} alt="At" className="w-32 mt-36 rotate-12" />
                                    <img src={img3} alt="Cs" className="w-32 mb-44 -rotate-45" />
                                    <img src={img4} alt="Wallet" className="w-32 mt-32 -rotate-12" />
                                    <img src={img5} alt="Assistant" className="w-[30%]" />
                                    <img src={img6} alt="Phone" className="absolute w-32 mt-40 right-20" />
                                    <img src={img7} alt="Euro" className="w-32 mt-24 rotate-12" />
                                    <img src={img8} alt="MCC" className="w-32 mb-44  rotate-45" />
                                    <img src={img9} alt="Gmail" className="w-32 mb-48 -rotate-45" />
                    
                                </div>

                                 <img src={img10} alt="" className="w-full -mt-14" />
                    <div className="flex items-center  ">
                                        <div className="flex  sm:w-6/12 ">
                                            <img src={img3} alt="Cs" className="w-56 -rotate-45 ml-[12vw]" />
                                        </div>
                                    <div className="flex flex-col relative items-center justify-between mx-auto sm:w-2/2  w-[160vh]">
                                        <h1 className="text-5xl font-bold tracking-widest text-Black mr-[38vw]">Message Us</h1>
                       
                                        <h1 className="text-black-600 text-xl tracking-widest font-medium mt-3 text-left">
                                            If you wish to be considered for employment at OXBO, please do not
                                            send a message here – instead, please complete OXBO’s{" "}
                                            <span className="text-blue-500">job application</span> and our Human
                                            Resources department will contact you after their review of your
                                            submitted information.
                                            </h1>
                            
                                    </div>
                    </div>
               
                </div>
                <div className="flex w-full mx-auto justify-center">
                        <form class="w-full max-w-lg mr-96">
                            <div class="flex w-full">
                                <div className="w-full md:w-1/2  mb-6  md:mb-0">
                                    <label className="block text-black-700 tracking-widest text-xl font-medium mb-2" htmlFor="fname">First Name :{" "}</label>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={formData.fname}
                                        id="fname"
                                        name="fname"
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh]  px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                    />
                                    {errors.name && <h1 className="text-red-500 text-sm">{errors.name}</h1>}
                                </div>
                                <div class="w-full md:w-1/2 ml-48 ">
                                    <label class="block  tracking-widest text-black-700 text-xl font-medium mb-2" htmlFor="lname">Last Name :{" "}</label>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={formData.lname}
                                        id="lname"
                                        name="lname"
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-nowrap  mb-2">
                                <div className="w-full md:w-1/2   md:mb-0">
                                    <label className="block text-black-700 tracking-widest text-xl font-medium mb-2" htmlFor="email">Email ID:{" "}</label>
                                    <input
                                        type="text"
                                        id="email"
                                        value={formData.email}
                                        name="email"
                                        onChange={changeHandler}
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                    />
                                    {errors.email && <h1 className="text-red-500 text-sm">{errors.email}</h1>}
                                </div>
                            <div class="w-full md:w-1/2 ml-48 ">
                                    <label class="block tracking-widest text-black-700 text-xl font-medium mb-2" htmlFor="contact">Contact Number :{" "}</label>
                                    <input
                                        type="text"
                                        onChange={changeHandler}
                                        value={formData.contact}
                                        id="contact"
                                        name="contact"
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-wrap ">
                                <div class="w-full ">
                                    <label class="block tracking-widest text-black-700 text-xl font-medium mb-2" for="write-your-message">
                                        Write your message :
                                    </label>
                                    <textarea
                                    className="appearance-none bg-clip-text block w-[130vh] rounded-lg bg-none text-black-700 border-[2px] border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-customBrown"
                                        onChange={changeHandler}
                                        name="message"
                                        value={formData.message}
                                        cols="35"
                                        rows="5"
                                    ></textarea>
                                    {errors.message && <h1 className="text-red-500 text-sm">{errors.message}</h1>}
                                </div>
                            </div>
                            <div onClick={clickHandler} className="text-customWhite text-lg mt-5  tracking-widest rounded-lg w-fit px-8 py-2 font-semibold bg-customBrown2 transition-all cursor-pointer duration-300 hover:bg-black">Send Message</div>

                        </form>
                </div>
                
                <div className="flex flex-col items-center">
                    <div onClick={() => setDisplayForm(true)} className="flex w-full ml-44">
                        <h1 className="text-3xl mt-6  tracking-wide">Need a Refund? <button className="text-customBrown2 tracking-wide" onClick={() => navigate("/refund")}>Click Here</button> for Easy Processing</h1>
                    </div>

                    <div className="sm:flex sm:mt-20 w-11/12 sm:max-lg:w-9/12 mx-auto space-x-14 mb-20 justify-between">
                        
                        <div className="text-center w-full sm:mb-0 ">
                            <FaPhoneAlt className="text-6xl mx-auto mt-1" />
                            <h1 className="font-bold tracking-widest sm:text-2xl text-3xl">Phone Number</h1>
                            <h1 className="text-lg tracking-widest">+44 (0) 208759 7755</h1>
                        </div>
                        <div className="text-center w-full  sm:mb-0 space-y-1 ">
                            <IoLocation className="text-6xl mx-auto" />
                            <h1 className="font-bold tracking-widest sm:text-2xl text-3xl">ADDRESS</h1>
                            <h1 className="text-lg tracking-widest">BULGARIA BLVD 1,1421 G.K. LOZENETS, SOFIA 8277</h1>
                        </div>
                        <div className="text-center w-full space-y-1">
                            <MdEmail className="text-6xl mx-auto" />
                            <h1 className="font-bold tracking-widest sm:text-2xl text-3xl">Request for Proposal</h1>
                            <h1 className="text-lg tracking-widest"> Info@hiltongroup.com</h1>
                        </div>
                    </div>
                </div>
                
               
            </div>
        </>
    );
}
