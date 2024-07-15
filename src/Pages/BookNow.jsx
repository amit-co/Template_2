import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo1 from "/dark_logo.png";
import PropTypes from "prop-types";
import Select from "react-select";
import FaEgg from "/src/assets/Dietery_Resctrictions/egg.jpg";
import FaFish from "/src/assets/Dietery_Resctrictions/fish.jpg";
import FaSoya from "/src/assets/Dietery_Resctrictions/soya.jpg";
import FaMilk from "/src/assets/Dietery_Resctrictions/milk.jpg";
import FaGluten from "/src/assets/Dietery_Resctrictions/gluten.jpg";
import FaPeanuts from "/src/assets/Dietery_Resctrictions/peanuts.jpg";
import FaMustard from "/src/assets/Dietery_Resctrictions/mustard.jpg";
import FaNuts from "/src/assets/Dietery_Resctrictions/nuts.jpg";
import FaSesame from "/src/assets/Dietery_Resctrictions/sesame.jpg";
import FaCelery from "/src/assets/Dietery_Resctrictions/celery.jpg";
import FaSulphites from "/src/assets/Dietery_Resctrictions/sulphites.jpg";
import FaCrustaceans from "/src/assets/Dietery_Resctrictions/crustaceans.jpg";
import FaMoluscs from "/src/assets/Dietery_Resctrictions/moluscs.jpg";
import FaLupin from "/src/assets/Dietery_Resctrictions/lupin.jpg";
import { z } from "zod";
import img from "/Textures/4524.png";
import img6 from "/New/bgn.png";
import img2 from "/icons/facebook.png";
import img3 from "/icons/instagram.png";
import img4 from "/icons/twitter.png";
import img5 from "/icons/Call.png";

const schema = z.object({
    firstName: z.string().min(1, "First name is required").max(50),
    lastName: z.string().min(1, "Last name is required").max(50),
    email: z.string().email("Invalid email address").max(100),
    contact: z.string().min(10).max(15),
});

const InputField = ({ label, name, type, value, onChange, error }) => (
    <div >
        <div className="flex justify-between">
            <label className="block text-black-700 tracking-widest text-lg font-medium">{label}:</label>
            
        </div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="appearance-none bg-clip-text text-black-700 px-2 py-2 border-[2px] border-customBrown rounded-lg w-full focus:outline-none"
                    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                />
                {error && <span className="text-red-500 text-sm ">{error}</span>}
    </div>
);

InputField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

const SelectField = ({ label, name, value, onChange, options }) => (
        <div >
            <label className="block text-black-700 tracking-widest text-lg font-medium">{label}:</label>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="appearance-none bg-clip-text text-black-700 px-2 py-2 border-[2px] w-full border-customBrown rounded-lg focus:outline-none"
                    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                        {options.map((option) => (
                            <option key={option} value={option} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                {option}
                            </option>
                        ))}
                </select>
        </div>
);

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const dietaryOptions = [
    { value: "Eggs", label: "Eggs", icon: FaEgg },
    { value: "Fish", label: "Fish", icon: FaFish },
    { value: "Soya", label: "Soya (Soy)", icon: FaSoya },
    { value: "Milk", label: "Milk (Dairy)", icon: FaMilk },
    { value: "Gluten", label: "Gluten", icon: FaGluten },
    { value: "Peanuts", label: "Peanuts", icon: FaPeanuts },
    { value: "Mustard", label: "Mustard", icon: FaMustard },
    { value: "Nuts", label: "Nuts", icon: FaNuts },
    { value: "Sesame", label: "Sesame", icon: FaSesame },
    { value: "Celery", label: "Celery", icon: FaCelery },
    { value: "Sulphites", label: "Sulphites", icon: FaSulphites },
    { value: "Crustaceans", label: "Crustaceans", icon: FaCrustaceans },
    { value: "Moluscs", label: "Moluscs", icon: FaMoluscs },
    { value: "Lupin", label: "Lupin", icon: FaLupin },
];

const customOption = (props) => (
    <div ref={props.innerRef} {...props.innerProps} className="flex items-center p-2">
        {props.data.icon && <img src={props.data.icon} alt={props.data.label} className="mr-2 w-6 h-6" />}
        {props.data.label}
    </div>
);

const customMultiValueLabel = (props) => (
    <div className="flex items-center">
        {props.data.icon && <img src={props.data.icon} alt={props.data.label} className="mr-1 w-4 h-4" />}
        {props.data.label}
    </div>
);


export default function BookNow() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [selectedNav, setSelectedNav] = useState(location.pathname);
    const [displayGallery, setDisplayGallery] = useState(false);
    const [displayVenue, setDisplayVenue] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const handleNavClick = (path) => {
        setSelectedNav(path);
    };


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        language: "English",
        date: "",
        guests: 1,
        dietaryRestriction: [],
        specialOccasions: "",
        otherOccasion: "", 
        reservationNote: "",
        time: "8:00 AM",
    });

    const [noteVisible, setNoteVisible] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const now = new Date().toISOString().split("T")[0];
        setFormData((prevFormData) => ({ ...prevFormData, date: now }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSelectChange = (selectedOptions, actionMeta) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [actionMeta.name]: selectedOptions ? selectedOptions.map((option) => option.value) : [],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
                schema.parse(formData);
                const queryString = new URLSearchParams(formData).toString();
                window.location.href = `https://reserve-ocean-website.vercel.app/reservationconfirmation?${queryString}`;
                } catch (error)
        {

                if (error instanceof z.ZodError) {
                        const errorMessages = error.errors.reduce((acc, curr) => {
                            acc[curr.path[0]] = curr.message;
                            return acc;
                        }, {});
                    setErrors(errorMessages);
                }
        }
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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <div>
                 <div className="bg-fixed bg-cover " style={{ backgroundImage: `url(${img6})` }}>
                       <div className={` top-0 left-0 right-0 z-10 transition-transform duration-300 ${isFixed ? 'fixed' : 'relative'}`}>
                                    <div className={`bg-customWhite text-white flex justify-between px-10 items-center transition-opacity duration-300 `}>
                                            <div className="md:flex hidden space-x-5 2xl:ml-4 mt-10 ">
                                                <a href="https://www.facebook.com/yourprofile">
                                                    <img src={img2} />
                                                </a>
                                                <a href="https://www.instagram.com/yourprofile">
                                                    <img src={img3} />
                                                </a>
                                                <a href="https://twitter.com/yourprofile">
                                                    <img src={img4} />
                                                </a>
                                            </div>
                                                    <img
                                                        className="md:w-[140px] sm:w-[130px] z-3 cursor-pointer w-[110px] md:ml-14"
                                                        src={logo1}
                                                        alt="Company Logo"
                                                        onClick={() => navigate("/")}/>

                                                    <div>
                                                        <div className="md:flex text-2xl items-center text-customBrown hidden space-x-2 2xl:mr-8 mt-10">
                                                            <img src={img5}
                                                                className="w-[30px]" />
                                                            <Link to="tel:+442087597755">+44 (0) 208759 7755</Link>
                                                        </div>
                                                            <div className="text-white">
                                                                {toggle ? (
                                                                    <RxCross2
                                                                        onClick={() => setToggle(false)}
                                                                        className="md:hidden cursor-pointer text-4xl"
                                                                    />
                                                                ) : (
                                                                    <IoMenuOutline
                                                                        onClick={() => setToggle(true)}
                                                                        className="md:hidden cursor-pointer text-3xl"
                                                                    />
                                                                )}
                                                            </div>
                                                    </div>
                                    </div>
                                    <div className="flex bg-customWhite text-customBrown font-bold text-xl justify-around items-center sm:py-4">
                                         <div className="xl:flex lg:flex md:flex hidden md:space-x-2 lg:space-x-4 xl:space-x-12 2xl:space-x-16">
                                                    <Link to="/" className={`group relative ${selectedNav === '/' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/')}>
                                                        <h1>HOME</h1>
                                                    </Link>
                                                    <Link to="/bookNow" className={`group relative ${selectedNav === '/bookNow' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/bookNow')}>
                                                        <h1>BOOK NOW</h1>
                                                    </Link>
                                                    <Link to="/menu" className={`group relative ${selectedNav === '/menu' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/menu')}>
                                                        <h1>MENU</h1>
                                                    </Link>
                                              <div className={`group relative ${selectedNav === '/venue' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/venue')}>
                                                    <h1
                                                        onClick={() => navigate("/venue")}
                                                        onMouseEnter={() => setDisplayVenue(true)}
                                                        onMouseLeave={() => setDisplayVenue(false)}
                                                        >
                                                        VENUE
                                                    </h1>
                                                    {displayVenue && (
                                                        <div
                                                            onMouseEnter={() => setDisplayVenue(true)}
                                                            onMouseLeave={() => setDisplayVenue(false)}
                                                            className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-[10vw]"
                                                            style={{ backgroundImage: `url(${img})` }} >
                                                            <Link
                                                                to="/venue/restaurant"
                                                                className="hover:text-cutomOrange transition-all duration-100"
                                                            >
                                                                RESTAURANT
                                                            </Link>
                                                            <Link
                                                                to="/venue/bar"
                                                                className="hover:text-cutomOrange transition-all duration-100"
                                                            >
                                                                BAR
                                                            </Link>
                                                            <Link
                                                                to="/venue/cafe"
                                                                className="hover:text-cutomOrange transition-all duration-100"
                                                            >
                                                                CAFE
                                                            </Link>
                                                            <Link
                                                                to="/venue/ird"
                                                                className="hover:text-cutomOrange transition-all duration-100"
                                                            >
                                                                IRD
                                                            </Link>
                                                        </div>
                                                    )}
                                              </div>
                                                    <Link to="/privateDinning" className={`group relative ${selectedNav === '/privateDinning' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/privateDinning')}>
                                                        <h1>PRIVATE DINNING</h1>
                                                    </Link>
                                                    <Link to="/giftVoucher" className={`group relative ${selectedNav === '/giftVoucher' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/giftVoucher')}>
                                                        <h1>GIFT VOUCHER</h1>
                                                    </Link>
                                                    <Link to="/contact" className={`group relative ${selectedNav === '/contact' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/contact')}>
                                                        <h1>CONTACT</h1>
                                                    </Link>
                                                <div className={`group relative ${selectedNav === '/gallery' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/gallery')}>
                                                        <h1
                                                            onClick={() => navigate("/gallery")}
                                                            onMouseEnter={() => setDisplayGallery(true)}
                                                            onMouseLeave={() => setDisplayGallery(false)}
                                                        >
                                                            GALLERY
                                                        </h1>
                                                        {displayGallery && (
                                                            <div
                                                                onMouseEnter={() => setDisplayGallery(true)}
                                                                onMouseLeave={() => setDisplayGallery(false)}
                                                                className="bg-repeat flex flex-col z-10 p-2 space-y-3 absolute w-[10vw]"
                                                                style={{ backgroundImage: `url(${img})` }}>
                                                                    <Link
                                                                        to="/gallery/food"
                                                                        className="hover:text-cutomOrange transition-all duration-100"
                                                                    >
                                                                        FOOD
                                                                    </Link>
                                                                    <Link
                                                                        to="/gallery/drinks"
                                                                        className="hover:text-cutomOrange transition-all duration-100"
                                                                    >
                                                                        DRINKS
                                                                    </Link>
                                                                    <Link
                                                                        to="/gallery/teams"
                                                                        className="hover:text-cutomOrange transition-all duration-100"
                                                                    >
                                                                        TEAMS
                                                                    </Link>
                                                            </div>
                                                        )}
                                                </div>
                                                                    <Link to="/about" className={`group relative ${selectedNav === '/about' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/about')}>
                                                                        <h1>ABOUT</h1>
                                                                    </Link>
                                         </div>
                                    </div>
                       </div>


                                        <div className="flex bg-customTeal h-16 lg:h-20 sm:h-16 mb-6 items-center justify-center ">
                                            <p className="text-xs sm:text-lg lg:text-xl text-customBlack2 mx-2 sm:mx-3 text-center place-items-center sm:text-left">
                                                Terminal Four, Hounslow, TW6 3AF, United Kingdom | +44 (0) 208759 7755 | franky.rodrigues@hilton.com | OXBO-ReserveOcean.com
                                            </p>
                                        </div>

                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 mt-8 tracking-widest">Book Now</h2>
                    <div className="mt-8 md:flex md:space-x-4 sm:ml-5">
                        <InputField
                            label="First Name"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />
                        <InputField
                            label="Last Name"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <InputField
                            label="Contact"
                            name="contact"
                            type="number"
                            value={formData.contact}
                            onChange={handleChange}
                            error={errors.contact}
                        />
                        <SelectField
                            label="Preferred Communication Language"
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            options={["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Hindi"]}
                        />
                        <SelectField
                            label="Guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        />
                    </div>
                    <div className="mt-8 md:flex md:space-x-4 sm:ml-5">
                            <InputField
                                label="Date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Time"
                                name="time"
                                type="time"
                                value={formData.time}
                                onChange={handleChange}
                            />
                        <div>
                            <label className="block text-black-700 text-lg font-medium">Dietary Restriction:</label>
                            <Select
                                name="dietaryRestriction"
                                value={dietaryOptions.filter(option => formData.dietaryRestriction.includes(option.value))}
                                onChange={handleSelectChange}
                                options={dietaryOptions}
                                isMulti
                                placeholder="Select Dietary Restrictions"
                                className="appearance-none bg-clip-text text-black-700 border-[2px] border-customBrown rounded-lg"
                                components={{ Option: customOption, MultiValueLabel: customMultiValueLabel }}
                                styles={{
                                    control: base => ({
                                        ...base,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }),
                                    menu: base => ({
                                        ...base,
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }),
                                    multiValue: base => ({
                                        ...base,
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }),
                                    multiValueLabel: base => ({
                                        ...base,
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }),
                                }}
                            />
                        </div>
                                <SelectField
                                    label="Special Occasions"
                                    name="specialOccasions"
                                    value={formData.specialOccasions}
                                    onChange={handleChange}
                                    options={["Select Special Occasion", "Birthday", "Anniversary", "Promotion", "Farewell Party", "National Holiday", "Halloween", "Christmas", "Thanksgiving", "New Year", "House Warming", "Baby Shower", "Bridal Shower", "Engagement", "Wedding", "Other"]}
                                />
                                {formData.specialOccasions === "Other" && (
                                    <InputField
                                        label="Please Specify Occasion"
                                        name="otherOccasion"
                                        type="text"
                                        value={formData.otherOccasion}
                                        onChange={handleChange}
                                        error={errors.otherOccasion}
                                    />
                                )}
                             <div>
                                <label className="block text-black-700 tracking-widest text-lg font-medium">Reservation Note:</label>
                                <button
                                    type="button"
                                    onClick={() => setNoteVisible(!noteVisible)}
                                    className=" text-left px-3 py-2 border-[2px] border-customBrown rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    {noteVisible ? "Hide Note" : "Click to Add a Note"}
                                </button>
                                {noteVisible && (
                                    <textarea
                                        name="reservationNote"
                                        value={formData.reservationNote}
                                        onChange={handleChange}
                                        className=" appearance-none bg-clip-text text-black-700 px-3 py-2 border-[2px] border-customBlack2 rounded-lg focus:outline-none"
                                        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                                    />
                                )}
                             </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                        <button type="submit" className="border-customBrown rounded-lg font-medium bg-customBrown2 px-7 py-2 md:px-14 md:text-lg text-white transition-all duration-300">
                            Book A Table
                        </button>
                    </div>
                </form>
          
                 </div>
            </div>
    );
}
