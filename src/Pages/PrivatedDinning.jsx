import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { LuClock } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import img4 from "/New/bgn.png";
import sp1 from "/New/Rectangle 4632.png";
import back from "/buttons/Group 146.png";


const SelectField = ({ name, value, onChange, options }) => (
    <div className="mb-4">

        <select
            name={name}
            value={value}
            onChange={onChange}
            className="bg-clip-text text-xl text-black-700 w-[40vh] px-3 h-14 border-[2px] border-customBlack2 rounded-lg focus:outline-none"

        >
            {options.map((option) => (
                <option key={option} value={option} >
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default function PrivateDinning() {
    const navigate = useNavigate();
  
    
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [noOfPeople, setNoOfPeople] = useState("2 people");

    const initialFormData = {
        date: new Date(),
        time: "16:00",
        people: 2,
        occassion: "",
        message: "",
        
    }
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

  

    // Function to get the nearest 30-minute interval
    const getNearestThirtyMinuteInterval = (date) => {
        const minutes = date.getMinutes();
        const roundedMinutes = Math.ceil(minutes / 30) * 30;
        if (roundedMinutes === 60) {
            date.setHours(date.getHours() + 1);
            date.setMinutes(0);
        } else {
            date.setMinutes(roundedMinutes);
        }
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.toTimeString().slice(0, 5);
    };

    const [selectedTime, setSelectedTime] = useState(getNearestThirtyMinuteInterval(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedTime(getNearestThirtyMinuteInterval(new Date()));
        }, 60000); // Update every minute to keep the default time accurate
        return () => clearInterval(interval);
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date.toISOString().split('T')[0]);
    };

    const clickHandler = () => {
        const formData = {
            date: selectedDate,
            time: selectedTime,
            people: noOfPeople
        };
        const queryString = new URLSearchParams(formData).toString();
        window.location.href = `https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine?${queryString}`;
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleNoOfPeople = (e) => {
        setNoOfPeople(e.target.value);
    };

    const generateTimeOptions = () => {
        const options = [];
        const start = new Date();
        start.setHours(8, 0, 0, 0); // Start time: 8:00
        const end = new Date();
        end.setHours(23, 0, 0, 0); // End time: 23:00

        while (start <= end) {
            options.push(start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            start.setMinutes(start.getMinutes() + 30); // Increment by 30 minutes
        }

        return options;
    };

    return (
        
        <div className="bg-cover pb-10 pt-28" style={{ backgroundImage: `url(${img4})` }}>
            <div className="flex flex-row mr-8 ">
            <button
                className="self-start mt-10 ml-10"
                onClick={() => navigate('/')}
            >
                <img src={back} alt="backward" className="w-10 h-10 object-contain" />
            </button>
         
                <h1 className="md:text-5xl text-3xl tracking-widest text-customBrown3 font-bold mt-10 mx-auto">
                        PRIVATE DINING
               </h1>
            </div>
                      <p className="md:w-10/12 text-center mt-10 text-2xl  font-medium text-black-900 mx-auto">
                            Your Perfect Destination For Any Occasion, Our Spaces Are Designed To Be Sociable. They Are Multi-Purpose All-Day Dining And Drinking Environments
                            That Can Be Used In Different Ways, As The Occasion Dictates Or As The Mood Changes From Breakfast To Late. Our Spaces Are Large Enough To Accommodate
                            Gatherings And Groups, With Clever Partitions Or Sliding Pagels That Can Be Used To Create Smaller Areas With A Cozier Feel. Seating Arrangements
                            Reflect And Respect Single Diners And Drinkers Too.
                     </p>
                  
          
            <div className="bg-customSalmon bg-opacity-25 mb-3 mt-10 rounded-lg mx-16 py-10 " >
                <div className="flex flex-row mx-16 space-x-24">
                    <img src={sp1} className="object-contain" />
                <div className="flex flex-col  items-center ">
                    <div >
                        <h1 className="text-2xl tracking-widest font-semibold ">Party Size</h1>
                        <div className="relative flex items-center border-customBlack2 border-[2px] rounded-lg w-[40vh] h-14 ">
                            <select id="peopleSelect" value={noOfPeople} onChange={handleNoOfPeople} className="w-full pl-10 pr-4 text-xl outline-none bg-clip-text">
                                {Array.from({ length: 19 }, (_, i) => i + 2).map(number => (
                                    <option key={number} value={number}>{number} People</option>
                                ))}
                            </select>
                            <GoPeople className="absolute left-3 text-xl " />
                        </div>
                        </div>
                        <div className="mt-2">
                        <h1 className="text-2xl tracking-widest font-semibold ">Date</h1>
                        <div className="relative flex items-center border-customBlack2 border-[2px] rounded-lg w-[40vh] h-14">
                            <DatePicker
                                selected={new Date(selectedDate)}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={15}
                                className="w-full pl-10 pr-4 text-xl  outline-none bg-clip-text"
                            />
                            <FaRegCalendar className="absolute left-3 text-xl " />
                        </div>
                        </div>
                        <div className="mt-2">
                        <h1 className="text-2xl tracking-widest font-semibold ">Time</h1>
                        <div className="relative flex items-center border-customBlack2 border-[2px] rounded-lg w-[40vh] h-14">
                            <select id="timingSelect" value={selectedTime} onChange={handleTimeChange} className="w-full pl-10 pr-4 text-xl outline-none bg-clip-text">
                                {generateTimeOptions().map(time => (
                                    <option key={time} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                            <LuClock className="absolute left-3 text-xl " />
                        </div>
                        </div>
                        <div className="mt-2">
                        <h1 className="text-2xl tracking-widest font-semibold ">Occassion</h1>
                        
                        <div className="relative flex items-center ">
                            <SelectField
                                id="occasion"
                                name="occassion"
                                value={formData.occassion}
                                onChange={handleChange} 
                                options={["Select Special Occasion", "Birthday", "Anniversary", "Promotion", "Farewell Party", "National Holiday", "Halloween", "Christmas", "Thanksgiving", "New Year", "House Warming", "Baby Shower", "Bridal Shower", "Engagement", "Wedding", "Other"]}
                            />
                            {formData.Occasion === "Other" && (
                                <InputField
                                    label="Please Specify Occasion"
                                    name="otherOccasion"
                                    type="text"
                                    value={formData.otherOccasion}
                                    onChange={handleChange}
                                   
                                />
                            )}
                        </div>
                    </div>

                        <div>
                        <h1 className="text-2xl tracking-widest font-semibold ">Reservation Note</h1>

                        <div className="relative flex items-center ">
                            <textarea
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                                className="bg-clip-text w-[40vh] text-black-700 px-3 h-14 border-[2px] border-customBlack2 rounded-lg focus:outline-none"
                                rows="5"
                                id="message"
                            ></textarea>
                        </div>
                    </div>


                    <button onClick={clickHandler} className="w-[25vh] h-14 mt-2 tracking-widest bg-customBrown2 text-white text-lg  font-semibold rounded transition duration-300 hover:bg-orange-600">
                        Find a Table
                    </button>

                </div>
                </div>
            </div>
             
          
        </div>
          
  );
}
