import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LuClock } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";


export function Reservation() {
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [noOfPeople, setNoOfPeople] = useState("2 people");

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
        <div className="flex bg-transparent items-center w-full">
            <div className="rounded-lg shadow-lg space-y-4 p-6 border border-gray-200 backdrop-blur-md">
                <div className="relative flex items-center border-gray-200 border-b rounded-t h-12">
                    <DatePicker
                        selected={new Date(selectedDate)}
                        onChange={handleDateChange}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        className="w-full pl-10 pr-4 text-lg outline-none bg-transparent"
                    />
                    <FaRegCalendar className="absolute left-3 text-xl" />
                </div>
                <div className="relative flex items-center border-gray-200 border-b h-12">
                    <select id="timingSelect" value={selectedTime} onChange={handleTimeChange} className="w-full pl-10 pr-4 text-lg outline-none bg-transparent">
                        {generateTimeOptions().map(time => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <LuClock className="absolute left-3 text-xl " />
                </div>
                <div className="relative flex items-center border-gray-200 border-b h-12">
                    <select id="peopleSelect" value={noOfPeople} onChange={handleNoOfPeople} className="w-full pl-10 pr-4 text-lg outline-none bg-transparent">
                        {Array.from({ length: 19 }, (_, i) => i + 2).map(number => (
                            <option key={number} value={number}>{number} People</option>
                        ))}
                    </select>
                    <GoPeople className="absolute left-3 text-xl " />
                </div>
                <button onClick={clickHandler} className="w-full h-12 bg-customBrown2 text-white text-lg font-semibold rounded transition duration-300 hover:bg-orange-600">
                    Find a Table
                </button>
                
            </div>
        </div>
    );
}
