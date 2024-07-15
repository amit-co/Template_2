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
            <div className="bg-fixed bg-cover opacity-75" style={{ backgroundImage: `url(${img6})` }}>
              <div className={` top-0 left-0 right-0 z-10 transition-transform duration-300 ${isFixed ? 'fixed' : 'relative'}`}>
                <div className={`bg-customWhite text-white flex justify-between px-10 items-center transition-opacity duration-300 `}
                   
                    >
                        <div className="flex w-20 text-center py-6">
                   <h1 className="text-black text-4xl">Restaurant Name</h1>
                      </div>
                
                    <div className="flex bg-customWhite text-customBrown font-bold text-xl justify-around items-center sm:py-6"
                        
                    >
                        <div className="xl:flex lg:flex md:flex hidden md:space-x-2 lg:space-x-4 text-customBlack2  text-2xl font-medium xl:space-x-32 mr-28  2xl:space-x-16">
                            <Link to="/" className={`group relative ${selectedNav === '/' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/')}>
                                <h1>HOME</h1>
                                <div className={`w-full absolute ${selectedNav === '/' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                                <Link to="/about" className={`group relative ${selectedNav === '/about' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/about')}>
                                    <h1>ABOUT US</h1>
                                    <div className={`w-full absolute ${selectedNav === '/about' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                                </Link>
                           
                            <Link to="/menu" className={`group relative ${selectedNav === '/menu' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/menu')}>
                                <h1>MENU</h1>
                                <div className={`w-full absolute ${selectedNav === '/menu' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                           
                               
                                       
                           
                            <Link to="/contact" className={`group relative ${selectedNav === '/contact' ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => handleNavClick('/contact')}>
                                <h1>CONTACT</h1>
                                <div className={`w-full absolute ${selectedNav === '/contact' ? 'block' : 'hidden'} absolute h-[4px] bg-customBlack2`}></div>
                            </Link>
                           
                           
                        </div>
                    </div>
                    </div>
                    </div>

                <div className="flex bg-customTeal h-16 lg:h-20 sm:h-16 mb-6 items-center justify-center ">
                    <p className="text-xs sm:text-lg lg:text-xl text-customBlack2 mx-2 sm:mx-3 text-center place-items-center sm:text-left">
                        Terminal Four, Hounslow, TW6 3AF, United Kingdom | +44 (0) 208759 7755 | franky.rodrigues@hilton.com | OXBO-ReserveOcean.com
                    </p>
                </div>


                
                    
             

                   
                           
                        <h2 className="md:text-3xl sm:text-2xl text-2xl lg:text-4xl font-bold text-customBlack2 text-center mb-4 mt-8 tracking-widest">Book Now</h2>
                       
               
                  
                
            </div>
            <div className="flex flex-col mt-24 items-center ">
                <img src={menu} className="w-1/2 sm:w-auto" />

                <div className="flex flex-col sm:flex-row items-center justify-center mx-auto sm:mt-[10vh] mt-10">
                    <p className="text-2xl text-center mr-10 ml-10 font-medium text-gray-900 mb-28 m:w-1/2 ">OXBO Is A Destination For The Local Community, As Well As those visiting the city.Our sociable staff help to create a communal feel,building relationships with regulars and welcomimg new customers. Our menus are designed
                    with groups in mind - sharing platters and pitchers celebrate the union of delicious food and great conversation.   
                        Our spaces are designed to be sociable. They are Multi-purpose all day dinning and drinking environments that can be used in different ways,
                        as the occasion dictates or as the mood changes from breakfast to late.Our spaces are large enough to accommodate gatherings and groups , with clever partitions or sliding panels that can be used to create smaller areas with a cosier feel. Seating arrangements reflect and respect single diners and drinkers to. 
                        </p>
                    <img src={img1} className="w-full sm:w-auto sm:mt-0 sm:ml-10" />
                </div>
                </div>
            <div className="flex flex-row flex-wrap  justify-center h-full">
                <img src={b3} className="w-full sm:w-1/2 lg:w-1/4 " />
                <img src={b1} className="w-full sm:w-1/2 lg:w-1/4 " />
                <img src={b4} className="w-full sm:w-1/2 lg:w-1/4 " />
                <img src={b2} className="w-full sm:w-1/2 lg:w-1/4 " />
            </div>
        </div>
    );
}
