import { useState } from "react";
import { Reservation } from "./Reservation";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import img from "/Textures/4455.jpg";
export function Timings() {
    const [weekTimings,showWeekTimings] = useState(false)
    const [weekendTimings,showWeekendTimings] = useState(false)
    return (
                <div className="justify space-y-1">
                            <h1 className="sm:text-4xl mb-2 md:max-lg w-[110%] text-center underline text-2xl">Opening Hours</h1>
                      <div className="bg-no-repeat xl:ml-16 py-6 xl:px-[85px] 2xl:px-[95px] rounded-lg"
                           style={{ backgroundImage: `url(${img})` }}>
                        <div className="text-lg text-gray-700 mt-3">
                            <div className="justify-start space-y-1 ">
                                <div className="flex items-center justify-between px-4 bg-gray-200 sm:w-[20vw] rounded-lg py-2 font-semibold">
                                    <p className="">Monday - Friday</p>
                                        {weekTimings ? <IoIosArrowUp className="cursor-pointer" onClick={()=>showWeekTimings(false)}/>:<IoIosArrowDown onClick={()=>showWeekTimings(true)} className="cursor-pointer" />} 
                                </div>
                                        {weekTimings &&             <div className="flex px-2 border-t-0 border-2 text-gray-800 font-semibold sm:w-[20vw] justify-between py-1 ">
                                        <p>5:30 am - 10:30 am</p>
                                        <p>5:30 pm - 10:00 pm</p>
                                                                    </div>}
                                <div className="flex items-center justify-between px-4 bg-gray-200 sm:w-[20vw] rounded-lg py-2 font-semibold">
                                        <p className="">Saturday - Sunday</p>
                                        {weekendTimings ? <IoIosArrowUp className="cursor-pointer" onClick={()=>showWeekendTimings(false)}/>:<IoIosArrowDown onClick={()=>showWeekendTimings(true)} className="cursor-pointer" />} 
                                </div>
         
          
                            </div>
                                        {weekendTimings &&          <div className="flex px-2 border-t-0 border-2 text-gray-800 font-semibold sm:w-[20vw] justify-between py-2 ">
                                        <p>5:30 am - 11:00 am</p>
                                        <p>5:30 pm - 10:00 pm</p>
                                                                    </div> }
                        </div>
                                <div className="mt-5 bg-customWhite rounded-lg mb-8 mediumLarge2:mx-0 w-fit mx-auto">
                                       <Reservation />
                                </div>
                      </div>
                </div>
  );
}
