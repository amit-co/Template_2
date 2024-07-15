import img from "/oxboImage.jpg";
import { Quote } from "../Components/Quote";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import { toast } from "react-toastify";
import { z } from "zod"
import img1 from "/Textures/4523.png"
import img2 from "/Textures/Vector 82.png"
import img3 from "/Textures/Frame 28.png"
import img4 from "/Textures/4525.png"

export default function PrivateDinning() {
  
                  const schema = z.object({
                    name: z
                      .string()
                      .min(1, "First name is required")
                      .max(50, "First name must be at most 50 characters"),
                    email: z
                      .string()
                      .email("Invalid email address")
                      .max(100, "Email must be at most 100 characters"),
                    phone: z
                      .string()
                      .min(10, "Contact number must be at least 10 characters long")
                      .max(15, "Contact number must be at most 15 characters long"),
                  });

                  const initialFormData = {
                    date: new Date(),
                    time: "16:00",
                    people: 2,
                    name: "",
                    email: "",
                    phone: "",
                    occassion: "",
                    message: "",
                    tag : "PD"
                  }
                  const [formData, setFormData] = useState(initialFormData);

                  const[errors,setErrors] = useState({})
                  console.log(errors)
                  const changeHandler = (e) => {
                    const { name, value } = e.target;
                    setFormData((prev) => ({
                      ...prev,
                      [name]: value,
                    }));
                  };

                  const handleDateChange = (date) => {
                    setFormData((prev) => ({
                      ...prev,
                      date: date,
                    }));
                  };

  function formHandler(){
                  try{
                    schema.parse(formData)
                    axios({
                    method : "post",
                    url : `${config.url}/messages`,
                    data : formData
                })
                    .then((res)=>{
                      toast.success('Message sent', {
                        position: "top-center",
                        autoClose: 1998,
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
                  }catch (error) {
                        if (error instanceof z.ZodError) {
                          const errorMessages = error.errors.reduce((acc, curr) => {
                            acc[curr.path[0]] = curr.message;
                            return acc;
                          }, {});
                          setErrors(errorMessages);
                        }
                  }
    
  }

    return (
        <div className="bg-repeat" style={{ backgroundImage: `url(${img4})` }}>
                      <div
                        style={{ backgroundImage: `url(${img})` }}
                        className="h-[65vh] bg-fixed"
                      ></div>
         
                      <h1 className="md:text-5xl text-3xl tracking-widest text-customGray text-center font-bold mt-6">
                        PRIVATE DINING
                          </h1>
                      <div className="h-[4px] bg-gradient-to-r from-transparent via-gray-400  to-transparent my-6"></div>
                      <p className="md:w-11/12 text-center mt-10 text-2xl  font-medium text-black-900 mx-auto">
                    Welcome to OXBO, where culinary excellence meets unparalleled
                    hospitality. Nestled in the heart of Walles, our restaurant offers a
                    dynamic dining experience that celebrates the fusion of modern and
                    traditional flavors. At OXBO, we pride ourselves on sourcing the finest
                    local ingredients to craft innovative dishes that cater to a variety of
                    palates. Whether you're indulging in our signature creations or
                    exploring our seasonal specials, each meal is a journey of taste and
                    texture. Our stylish yet cozy ambiance, complemented by exceptional
                    service, ensures that every visit is memorable. Join us at OXBO and
                    savor the art of fine dining.
                  </p>
                  <p className="md:w-9/12 text-center mx-auto text-2xl font-medium text-black-900 mt-5">
                    Discover the perfect blend of comfort and sophistication in our
                    thoughtfully designed space, where every detail is crafted to enhance
                    your dining experience. From intimate dinners to lively gatherings, OXBO
                    is the ideal setting for any occasion.
          </p>
          <div>
                <div className="mt-2 flex items-center ml-10 " >
                  <img className="h-auto max-w-full object-contain ml-3" src={img3}  />
                  <h1 className="ml-5 text-2xl font-bold">Make A Reservation</h1>
              </div>

              <img className="h-auto max-w-full ml-10 object-contain" src={img2} />

            </div>
          
          <div className="bg-repeat mb-3 mt-10 rounded-lg mx-10 py-10  object-contain" style={{ backgroundImage: `url(${img1})` }} >
                   
          
                   <div className="mt-8 md:flex md:space-x-8 px-2 w-9/12 mx-auto">
                       <div className="md:w-4/12 flex flex-col">
                          <div className="flex justify-between">
                            <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="name">
                                NAME
                              </label>
                         
                        </div>
                      <input
                        name="name"
                        onChange={changeHandler}
                        value={formData.name}
                        type="text"
                        id="name"
                        className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                      />
                      {errors.name && <h1 className="text-red-500 text-sm">{errors.name}</h1>}
          
                    </div>
                       <div className="md:w-4/12 flex flex-col">
                                 <div className="flex justify-between">
                            <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="email">
                                        EMAIL
                                      </label>
                                      
                                  </div>
                                          <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={changeHandler}
                                            id="email"
                                            className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                          />
                                  {errors.email && <h1 className="text-red-500 text-sm">{errors.email}</h1>}
                       </div>
                            <div className="md:w-4/12 flex flex-col">
                                        <div className="flex justify-between">
                            <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="phone">
                                                PHONE
                                              </label>
                                             
                                        </div>
                                              <input
                                                type="number"
                                                id="phone"
                                                onChange={changeHandler}
                                                value={formData.phone}
                                                name="phone"
                                                className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                              />
                                              {errors.phone && <h1 className="text-red-500 text-sm">{errors.phone}</h1>}
                            </div>
                   </div>
                                  <div className="mt-8 md:flex md:space-x-8 px-2 w-9/12 mx-auto">
                                                <div className="md:w-4/12 flex flex-col">
                        <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="date">
                                                    DATE
                                                  </label>
                                                  <DatePicker
                                                    name="date"
                                                    selected={formData.date}
                                                    onChange={handleDateChange}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                                  />
                                                </div>
                                        <div className="md:w-4/12 flex flex-col">
                        <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="time">
                                                TIME
                                              </label>
                                              <select
                                                id="time"
                                                value={formData.time}
                                                name="time"
                                                onChange={changeHandler}
                                                className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                              >
                                                    {[
                                                      "16:00",
                                                      "16:30",
                                                      "17:00",
                                                      "17:30",
                                                      "18:00",
                                                      "18:30",
                                                      "19:00",
                                                      "19:30",
                                                      "20:00",
                                                      "20:30",
                                                      "21:00",
                                                      "21:30",
                                                      "22:00",
                                                      "22:30",
                                                      "23:00",
                                                    ].map((time) => (
                                                          <option key={time} value={time}>
                                                               {new Date(`1970-01-01T${time}Z`).toLocaleTimeString([], {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit",
                                                               })}
                                                          </option>
                                                    ))}
                                              </select>
                                        </div>
                                        <div className="md:w-4/12 flex flex-col">
                        <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="people">
                                            PEOPLE
                                          </label>
                                          <select
                                            id="people"
                                            name="people"
                                            value={formData.people}
                                            onChange={changeHandler}
                                            className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                          >
                                            {Array.from({ length: 19 }, (_, i) => i + 2).map((number) => (
                                              <option key={number} value={number}>
                                                {number} People
                                              </option>
                                            ))}
                                          </select>
                                        </div>
                                  </div>
                       <div className="mt-8 md:flex md:space-x-8 px-2 w-9/12 mx-auto">
                                        <div className="md:w-full flex flex-col">
                        <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="occasion">
                                            OCCASION
                                          </label>
                                          <input
                                            type="text"
                                            id="occasion"
                                            name="occassion"
                                            value={formData.occassion}
                                            onChange={changeHandler}
                                            className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                          />
                                        </div>
                       </div>
                       <div className="px-2 pb-5 w-9/12 mx-auto">
                                        <div className="flex mt-2 flex-col">
                        <label className="block text-black-700 tracking-widest text-lg font-medium " htmlFor="message">
                                            MESSAGE
                                          </label>
                                              <textarea
                                                name="message"
                                                onChange={changeHandler}
                                                value={formData.message}
                                                className="appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBrown rounded-lg focus:outline-none"
                                                rows="5"
                                                id="message"
                                              ></textarea>
                                        </div>
                       </div>
                                      <div className="flex w-9/12 px-2  mx-auto justify-center">
                                                <button onClick={formHandler} className="border-customBrown rounded-lg font-medium bg-customBrown2 md:px-14 px-7 py-2 md:text-lg text-white transition-all duration-300">
                                                  SEND MESSAGE
                                                </button>
                                      </div>
          
         </div>
              <div className="w-10/12 mx-auto"><Quote /></div>
          
    </div>
          
  );
}
