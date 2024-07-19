import back from "/buttons/Group 146.png";
import { useNavigate } from 'react-router-dom';
import img2 from "/New/bgn.png";

export default function About() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-cover pb-10 pt-28" style={{ backgroundImage: `url(${img2})` }}>
                <div className="flex flex-row mr-8 ">
                    <button
                        className="self-start mt-10 ml-10"
                        onClick={() => navigate('/')}
                    >
                        <img src={back} alt="backward" className="w-10 h-10 object-contain" />
                    </button>
                    <h1 className="text-customBrown3 text-6xl font-bold mx-auto tracking-widest mt-10 mb-4">About Us</h1>
                </div>

                <p className="text-center text-2xl tracking-widest mx-36">Treat Your Favorite Food-Lover To One Of Our Golden Tickets - Pick Something Special And Choose From A Variety Of Restaurant
                    Experiences Ranging From Champagene Afternoon Tea And Cocktail Masterclasses To Bespoke Food And Wine Dinners And Michelin-Starred Tasting Menus.</p>

                <div className="flex flex-row w-full justify-center space-x-10 mt-8">
                    <div className="flex  bg-customSalmon bg-opacity-50  w-[450px] h-[500px] "></div>
                    <div className="flex flex-col items-center mt-10">
                        <h1 className="text-3xl tracking-widest ml-20 text-customBrown3 font-bold">Know More About Us</h1>
                        <div className="flex flex-col items-center text-2xl tracking-widest mt-6 ml-20 space-y-6">
                            <p >Our Journey</p>
                            <p >Our Team</p>
                            <p >Special Offers</p>
                            <p >More Locations</p>
                        </div>
                        <div>
                            <h1 className="text-2xl tracking-widest ml-20 text-customBrown3 font-bold mt-20">Sign Up For Newsletters Details</h1>
                            <div className="mt-4 lg:mt-2 flex flex-row items-center ml-20">
                                <input
                                    placeholder="Enter Email Id"
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="appearance-none bg-customSalmon rounded-l-lg bg-opacity-50 text-customBlack2 w-7/12 lg:w-[30vh] xl:w-[30vh] px-3 py-2 border-[2px] "
                                />
                                <button className="text-white rounded-r-lg tracking-widest bg-customBrown2 h-10 w-20">Sign Up</button>
                            </div>
                        </div>

                    </div>
                </div>





            </div>    
        </>
    );
}
