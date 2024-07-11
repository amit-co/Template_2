import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import img from "/Textures/4525.png";
import img2 from "/Illustrations/At.gif";
import img3 from "/Illustrations/Cs.gif";
import img4 from "/Illustrations/Wallet.gif";
import img5 from "/Illustrations/virtual-assistant 1.png";
import img6 from "/Illustrations/Phone.gif";
import img7 from "/Illustrations/Online Euro.gif";
import img8 from "/Illustrations/MCC.gif";
import img9 from "/Illustrations/Gmail.gif";
import img10 from "/Textures/Vector 87.png";

export default function Refund() {

  const navigate = useNavigate()
  const formHandler = () =>{
    // Axios call or other functionality
   navigate("/contact")
    }

    const refundOptions = [
        { value: "Select Reason", label: "Select Reason"},
        { value: "Wrong Item", label: "Wrong Item" },
        { value: "Double Charge", label: "Double Charge" },
        { value: "Other", label: "Others" },
    ];
    return (
      <>
      <div className="flex flex-col items-center bg-repeat justify-between  mx-auto mt-32" style={{ backgroundImage: `url(${img})` }}>
          <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center mt-4 mr-32">
                  <img src={img8} alt="MCC" className="w-24 mb-40 rotate-6" />
                  <img src={img2} alt="At" className="w-24 mt-36 rotate-12" />
                  <img src={img3} alt="Cs" className="w-24 mb-44 -rotate-45" />
                  <img src={img4} alt="Wallet" className="w-24 mt-32 -rotate-12" />
                  <img src={img5} alt="Assistant" className="w-[35%] " />
                  <img src={img6} alt="Phone" className="absolute w-24 mt-36 right-24" />
                  <img src={img7} alt="Euro" className="w-24 mt-24 rotate-12" />
                  
                  <img src={img9} alt="Gmail" className="w-32 mb-48 -rotate-45" />

              </div>

              <img src={img10} alt="" className="w-full -mt-14" />
                  
                  <div className="flex flex-col relative items-center justify-between mx-auto sm:w-2/2 mt-10 ml-[90vh] w-[200vh]">
                      <h1 className="text-5xl font-bold tracking-widest text-Black mr-[38vw]">Refund Request Form</h1>

              </div>

          </div>
          <div className="flex w-full mx-auto justify-center mt-10">
              <form class="w-full max-w-lg mr-96">
                  <div class="flex w-full">
                      <div className="w-full md:w-1/2  mb-6  md:mb-0">
                          <label className="block text-black-700 tracking-widest text-xl font-medium mb-2" htmlFor="fname">First Name :{" "}</label>
                          <input
                              type="text"
                              placeholder="Franky"
                              className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                          />
                        
                      </div>
                      <div class="w-full md:w-1/2 ml-48 ">
                          <label class="block  tracking-widest text-black-700 text-xl font-medium mb-2" htmlFor="lname">Last Name :{" "}</label>
                          <input
                              type="text"
                              placeholder="Rodrigues"
                              className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                          />
                      </div>
                  </div>
                  <div class="flex flex-nowrap  mb-2">
                      <div className="w-full md:w-1/2   md:mb-0">
                          <label className="block text-black-700 tracking-widest text-xl font-medium mb-2" htmlFor="email">Email ID:{" "}</label>
                          <input
                              type="text"
                              placeholder="Example@example.com"
                              className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                          />
                       
                      </div>
                      <div class="w-full md:w-1/2 ml-48 ">
                          <label class="block tracking-widest text-black-700 text-xl font-medium mb-2" htmlFor="contact">Contact Number :{" "}</label>
                          <input
                              type="text"
                              className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                          />
                      </div>
                        </div>
                        <div class="flex flex-nowrap  mb-2">
                            <div className="w-full md:w-1/2   md:mb-0">
                                <label className="block text-black-700 tracking-widest text-xl font-medium mb-2" htmlFor="email">Request Date:{" "}</label>
                                <input
                                    type="date"
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                />

                            </div>
                            <div class="w-full md:w-1/2 ml-48 ">
                                <label class="block tracking-widest text-black-700 text-xl font-medium mb-2" htmlFor="contact">Reason For Refund :{" "}</label>
                                <select
                                    
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                >
                                    {refundOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-customCream2" >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-nowrap  mb-2">
                            <div className="w-full md:w-1/2   md:mb-0">
                                <label className="block text-black-700 tracking-widest text-xl font-medium mb-2" htmlFor="email">Requested Amount:{" "}</label>
                                <input
                                    type="number"
                                    placeholder="$"
                                    className="appearance-none bg-clip-text text-black-700 w-[60vh] px-3 py-2 border-[2px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customBrown"
                                />

                            </div>
                        </div>
                  <div class="flex flex-wrap ">
                      <div class="w-full ">
                          <label class="block tracking-widest text-black-700 text-xl font-medium mb-2" for="write-your-message">
                              Additional Notes :
                          </label>
                          <textarea
                              className="appearance-none bg-clip-text block w-[130vh] rounded-lg bg-none text-black-700 border-[2px] border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-2 focus:border-customBrown"
                              cols="35"
                              rows="5"
                          ></textarea>
                          
                      </div>
                  </div>
                        <div onClick={formHandler} className="text-customWhite text-lg mt-5  tracking-widest rounded-lg w-fit px-8 py-2 font-semibold bg-customBrown2 transition-all cursor-pointer duration-300 hover:bg-black">Send Message</div>

              </form>
          </div>

          <div className="flex flex-col items-center">
             

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
